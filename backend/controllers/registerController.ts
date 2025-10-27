/* 注册控制层 */
const RegisterService = require('@services/registerService');
const RedisService = require('@services/redisService');
const { sendVerificationEmail } = require('@utils/sendEmail');
const varifyCodeGenerator = require('@utils/varifyCodeGenerator');
const { encryptionFunc, compareFunc } = require('@utils/stringEncryption');

class RegisterController {
  static #verificationCodeExpires = 5 * 60 * 1000;

  /**
   * 检查用户名是否已存在
   * @param {import('express').Request} req 请求参数
   * @param {import('express').Response} res 响应参数
   */
  static async checkUsernameExists(req, res) {
    const { username } = req.body;
    try {
      const user = await RegisterService.getUserByUsername(username);
      res.success({ exists: !!user });
    } catch (e) {
      res.fail(400, '检查用户名失败');
    }
  }

  /**
   * 检查邮箱是否已存在
   * @param {import('express').Request} req 请求参数
   * @param {import('express').Response} res 响应参数
   */
  static async checkEmailExists(req, res) {
    const { email } = req.body;
    try {
      const user = await RegisterService.getUserByEmail(email);
      res.success({ exists: !!user });
    } catch (e) {
      res.fail(400, '检查邮箱失败');
    }
  }

  /**
   * 注册
   * @param {import('express').Request} req 请求参数
   * @param {import('express').Response} res 响应参数
   */
  static async register(req, res) {
    const { username, email, password } = req.body;
    try {
      // 存储到redis缓存, 5分钟有效期
      await RedisService.set(
        `user:${email}`,
        JSON.stringify({ username, email, password }),
        RegisterController.#verificationCodeExpires,
      );
      res.success();
    } catch (e) {
      throw new Error(`Redis错误，Error: ${e}`);
    }
  }

  /**
   * 获取验证码
   * @param {import('express').Request} req 请求参数
   * @param {import('express').Response} res 响应参数
   */
  static async getVerificationCode(req, res) {
    const { email } = req.body;
    const code = varifyCodeGenerator();
    const hashCode = await encryptionFunc(code);
    try {
      // 验证用户信息是否存在
      if (await RedisService.exists(`user:${email}`)) {
        // 设置验证码缓存, 5分钟有效期
        if (
          await RedisService.set(
            `verification:${email}`,
            hashCode,
            RegisterController.#verificationCodeExpires,
          )
        ) {
          // 发送邮件
          await sendVerificationEmail(email, code);
          res.success();
        } else {
          res.fail(500, 'Redis错误');
        }
      } else {
        res.fail(400, '用户信息失效，请重新注册');
      }
    } catch (e) {
      res.fail(400, '验证码发送失败');
    }
  }

  /**
   * 注册后的邮箱验证
   * @param {import('express').Request} req 请求参数
   * @param {import('express').Response} res 响应参数
   */
  static async emailVerification(req, res) {
    const { pureVerificationCode, email } = req.body;
    try {
      // 查询 Redis 中缓存验证码
      const verificationCode = await RedisService.get(`verification:${email}`);
      if (verificationCode) {
        // 验证是否正确
        if (!(await compareFunc(pureVerificationCode, verificationCode))) {
          res.fail(400, '验证码不正确');
          return;
        }
      }
      // 验证码不存在
      else {
        res.fail(400, '验证码已过期');
        return;
      }
      // 存储用户信息
      RegisterController.saveUser(req, res, email);
    } catch (e) {
      res.fail(400, '邮箱验证失败');
    }
  }

  /**
   * 将用户信息存储到数据库
   * @param {Object} _ - 未使用的请求对象
   * @param {Object} res - 响应对象
   * @param {string} email - 用户邮箱
   * @returns {Promise<void>}
   * @throws {Error} 当数据库操作失败时抛出错误
   */
  static async saveUser(_, res, email) {
    const userInfo = await RedisService.get(`user:${email}`);

    if (userInfo) {
      const { username, password, email } = JSON.parse(userInfo);
      // 生成hash密码
      const hashPwd = await encryptionFunc(password);
      try {
        // 存储数据库
        await RegisterService.createUser({
          username,
          password: hashPwd,
          email,
        });
        // 返回数据
        res.success();
      } catch (e) {
        res.fail(400, '注册失败');
      } finally {
        // 删除redis缓存信息
        await RedisService.del(`user:${email}`);
        await RedisService.del(`verification:${email}`);
      }
    }
    // 用户信息过期
    else {
      res.fail(400, '用户信息已过期，请重新注册');
    }
  }
}

module.exports = RegisterController;

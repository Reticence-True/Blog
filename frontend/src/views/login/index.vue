<template>
  <div class="app">
    <div class="container">
      <div class="form-page" ref="formPage">
        <div class="left-login">
          <div class="title">
            <div>登 录</div>
          </div>
          <div class="login-form">
            <el-form
              label-width="80px"
              :inline="false"
              size="large"
              label-position="top"
            >
              <el-form-item>
                <el-input
                  placeholder="用户名"
                  size="large"
                  clearable
                  @change=""
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="密码"
                  size="large"
                  show-password
                  clearable
                  @change=""
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link
                  type="info"
                  size="small"
                  :underline="false"
                  target="_blank"
                  href=""
                >
                  忘记密码？
                </el-link>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="right-signup">
          <div class="title">注 册</div>
          <div class="signup-form">
            <el-form
              label-width="80px"
              :inline="false"
              size="large"
              label-position="top"
            >
              <el-form-item>
                <el-input
                  placeholder="用户名"
                  size="large"
                  clearable
                  @change=""
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="邮箱"
                  size="large"
                  clearable
                  @change=""
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="密码"
                  size="large"
                  show-password
                  clearable
                  @change=""
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="switch-btn-page" ref="btnPage">
        <el-button
          type="primary"
          size="large"
          class="switch-2-signup"
          @click="switchLoginShow"
        >
          Sign up 注册
        </el-button>
        <el-button
          type="primary"
          size="large"
          class="switch-2-login"
          @click="switchSignupShow"
        >
          Log in 登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let formPage: any, btnPage: any

const switchLoginShow = () => {
  formPage.style.transform = 'translateX(50%)'
  btnPage.style.transform = 'translateX(-50%)'
}
const switchSignupShow = () => {
  formPage.style.transform = 'translateX(0)'
  btnPage.style.transform = 'translateX(0)'
}
</script>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login_background.jpg') no-repeat center fixed;
  background-size: cover;

  .container {
    width: 90%;
    height: 90%;
    border: 1px solid #fff;
    border-radius: 2rem;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 3.5px 3.5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    .form-page {
      width: 100%;
      height: 100%;
      transform: translateX(0);
      position: absolute;
      top: 0;
      left: 0;
      transition: all 500ms;

      .left-login,
      .right-signup {
        width: 50%;
        height: 100%;
        border-radius: inherit;
        background: #e9e9e9;
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
      }

      .left-login {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        left: 50%;
        transform: translateX(0);
      }

      .right-signup {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        left: 0;
        transform: translateX(-100%);
      }

      .title {
        font-size: 6rem;
        color: #000;
      }

      .login-form,
      .signup-form {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .el-input {
          width: 100%;
          height: 5rem;
        }

        .el-button {
          margin: 0 auto;
        }
      }
    }

    .switch-btn-page {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0);
      transition: all 500ms;

      .switch-2-signup {
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translateX(-50%) translateY(-50%);
      }

      .switch-2-login {
        position: absolute;
        top: 50%;
        left: 125%;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    .el-button {
      width: 15.5rem;
      height: 4.5rem;
      font-size: 2rem;
      margin: 0;
    }
  }
}
</style>

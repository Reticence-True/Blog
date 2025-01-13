/* 发送邮件 */
const nodemailer = require('nodemailer')
const auth = {
    user: '1219380015@qq.com', // 你的 QQ 邮箱地址
    pass: 'olhzqcmssptxjhaj', // 使用授权码而非登录密码
}
Object.freeze(auth)
Object.freeze(auth.prototype)

// 创建 SMTP 邮件发送器
const transporter = nodemailer.createTransport({
    service: 'QQ',
    port: 465, // SMTP 端口，可以使用 465 (SSL) 或 587 (TLS)
    secure: true, // 使用 SSL
    auth,
})

/**
 * 发送验证码邮件
 * @param {string} toEmail 收件人邮箱
 * @param {string} verificationCode 6位验证码
 * @returns {Promise<SMTPTransport.SentMessageInfo>} 发送信息
 */
function sendVerificationEmail(toEmail, verificationCode) {
    const mailOptions = {
        from: auth.user, // 发件人邮箱
        to: toEmail, // 收件人邮箱
        subject: '您的邮箱验证码',
        html: `
        <h3>您的验证码是: ${verificationCode}</h3>
        请不要告诉任何人您的验证码，有效期为5分钟
        `,
    }
    return transporter.sendMail(mailOptions)
}

/**
 *
 * @param {string} toEmail 发送邮件的邮箱
 * @param {string} findPasswordUrl 找回密码的网页链接
 * @param {string} query 查询参数
 * @returns @returns {Promise<SMTPTransport.SentMessageInfo>} 发送信息
 */
function sendForgetPasswordEmail(toEmail, findPasswordUrl, query) {
    const mailOptions = {
        from: auth.user, // 发件人邮箱
        to: toEmail, // 收件人邮箱
        subject: '找回密码',
        // 使用富文本格式
        html: `
        <h3>请点击以下链接找回密码:</h3> 
        <a href="${findPasswordUrl}?email=${query}">${findPasswordUrl}</a> 
        <br/>
        如果您没有请求找回密码，请忽略此邮件
        `,
    }
    return transporter.sendMail(mailOptions)
}

module.exports = { sendVerificationEmail, sendForgetPasswordEmail }

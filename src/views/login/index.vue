<template>
    <div class="login-container">
        <div class="login">
            <div class="left-login" ref="loginArea" @click="switchLoginShow">
                <div class="title">
                    <div>登录</div>
                </div>
                <div class="login-form">
                    <el-form label-width="80px" :inline="false" size="large" label-position="top">
                        <el-form-item>
                            <el-input placeholder="用户名" size="large" clearable @change=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="密码" size="large" show-password clearable @change=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-link type="info" size="small" :underline="false" target="_blank" href="">忘记密码？</el-link>
                        </el-form-item>
                    </el-form>
                </div>
                <el-button type="primary" size="large" class="switch-2-signup" @click="">Sign up 注册</el-button>
            </div>
            <div class="right-signup" ref="signupArea" @click="switchSignupShow">
                <div class="title">注册</div>
                <div class="signup-form">
                    <el-form label-width="80px" :inline="false" size="large" label-position="top">
                        <el-form-item>
                            <el-input placeholder="用户名" size="large" clearable @change=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="邮箱" size="large" clearable @change=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="密码" size="large" show-password clearable @change=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="">注册</el-button>
                        </el-form-item>
                    </el-form>
                    <el-button type="primary" size="large" class="switch-2-login" @click="">Log in 登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
let loginArea: any, signupArea: any;

const switchLoginShow = () => {
    loginArea.style.transform = "translateX(200%)";
    signupArea.style.transform = "translateX(0)";
}
const switchSignupShow = () => {
    signupArea.style.transform = "translateX(-200%)";
    loginArea.style.transform = "translateX(0)";
}

</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background: url("@/assets/images/login_background.jpg") no-repeat center fixed;
    background-size: cover;

    .login {
        width: 90%;
        height: 90%;
        border: 1px solid #fff;
        border-radius: 2rem;
        text-align: center;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        box-shadow: 3.5px 3.5px 15px rgba(0, 0, 0, .3);
        overflow: hidden;

        .left-login,
        .right-signup {
            width: 50%;
            height: 100%;
            border-radius: inherit;
            background: #e9e9e9;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            transition: all .3s;
        }

        .left-login {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            position: absolute;
            left: 50%;
            transform: translateX(0);

            .switch-2-signup {
                padding: 25px;
                position: absolute;
                top: 50%;
                left: -50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }

        .right-signup {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            position: absolute;
            left: 0;
            transform: translateX(-200%);

            .switch-2-login {
                padding: 25px;
                position: absolute;
                top: 50%;
                left: 150%;
                transform: translateX(-50%) translateY(-50%);
            }
        }

        .title {
            font-size: 3rem;
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
                height: 50px;
            }

            .el-button {
                margin: 0 auto;
            }
        }

        .el-button {
            width: 40%;
            font-size: 1.25rem;
        }
    }
}
</style>
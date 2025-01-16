<template>
    <div>
        <div class="app">
            <div class="container">
                <div class="form-page" ref="formPage">
                    <div class="left-login">
                        <Login ref="loginRef"></Login>
                    </div>
                    <div class="right-signup">
                        <Signup ref="signupRef"></Signup>
                    </div>
                </div>
                <div class="switch-btn-page" ref="btnPage">
                    <el-button
                        type="primary"
                        size="large"
                        class="switch-2-signup login-btn"
                        :disabled="loginStore.btnsDisabled"
                        :loading="loginStore.btnsDisabled"
                        @click="dialogVisible = true"
                    >
                        Sign up 注册
                    </el-button>
                    <el-button
                        type="primary"
                        size="large"
                        class="switch-2-login login-btn"
                        :disabled="loginStore.btnsDisabled"
                        :loading="loginStore.btnsDisabled"
                        @click="dialogVisible = true"
                    >
                        Log in 登录
                    </el-button>
                </div>
            </div>
            <el-dialog v-model="dialogVisible" title="状态切换确认" width="400">
                <span>切换登录或注册状态将清空当前表单数据，是否继续？</span>
                <template v-slot:footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">
                            取消
                        </el-button>
                        <el-button type="primary" @click="submitChange">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from '@/store/modules/login'
import Login from './login/index.vue'
import Signup from './signup/index.vue'

const loginStore = useLoginStore()
let formPage: any, btnPage: any
// 子元素实例
const loginRef = ref<any>(null),
    signupRef = ref<any>(null)
// dialog显示状态
let dialogVisible = ref<boolean>(false)
// dialog状态(默认为登录)
let dialogStatus = ref<string>('login')

// 切换登录页显示
const switchLoginShow = () => {
    formPage.style.transform = 'translateX(0)'
    btnPage.style.transform = 'translateX(0)'
}

// 切换注册页显示
const switchSignupShow = () => {
    formPage.style.transform = 'translateX(50%)'
    btnPage.style.transform = 'translateX(-50%)'
}

// 确认切换
const submitChange = () => {
    dialogVisible.value = false
    // 清理表单域数据和验证状态
    clearFormFields()
    // 判断显示框状态，执行对应的切换方法
    if (dialogStatus.value === 'login') {
        switchSignupShow()
        // 更新dialog状态
        dialogStatus.value = 'signup'
    } else {
        switchLoginShow()
        // 更新dialog状态
        dialogStatus.value = 'login'
    }
}

// 清理表单域数据和验证状态
const clearFormFields = () => {
    loginRef.value.clearFormFields()
    signupRef.value.clearFormFields()
}
</script>
<script lang="ts">
export default {
    name: 'login',
}
</script>

<style scoped lang="scss">
.app {
    width: 100vw;
    max-width: $max-viewport-width;
    min-width: $min-viewport-width;
    height: 100vh;
    max-height: $max-viewport-height;
    min-height: $min-viewport-height;
    background: url('@/assets/images/login_background.jpg') no-repeat center
        center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 80%;
        max-width: $max-viewport-width * 0.8;
        min-width: $min-viewport-width * 0.8;
        height: 90%;
        max-height: $max-viewport-height * 0.9;
        min-height: $min-viewport-height * 0.9;
        border: 0.1rem solid #fff;
        border-radius: 2rem;
        text-align: center;
        box-shadow: 0.35rem 0.35rem 0.15rem rgba(0, 0, 0, 0.3);
        overflow: hidden;
        position: relative;

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
                background: #f9f8f8;
                position: absolute;
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
        }

        .switch-btn-page {
            height: 10%;
            transform: translateX(0);
            transition: all 500ms;

            .switch-2-signup {
                position: absolute;
                top: 450%;
                left: 25%;
                transform: translate(-50%, -50%);
            }

            .switch-2-login {
                position: absolute;
                top: 450%;
                right: -25%;
                transform: translate(50%, -50%);
            }
        }
    }
}
</style>
<style ::v-deep lang="scss">
.login-btn {
    width: 15.5rem;
    height: 4.5rem;
    font-size: 2rem;
    margin: 0;
}
</style>

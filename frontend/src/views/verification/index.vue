<template>
    <div class="app">
        <div class="container">
            <el-page-header @back="$router.back()">
                <template #content>
                    <span class="text-large font-600 mr-3">邮箱验证</span>
                </template>
            </el-page-header>
            <div class="verification-form">
                <el-form inline style="display: block" :rules="rules" :model="{ code }" ref="codeFormRef">
                    <el-form-item prop="code">
                        <el-input placeholder="请输入邮箱验证码" v-model="code" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="default" @click="getCode" :disabled="codeBtnIsDisabled"
                            :loading="codeBtnLoading">
                            {{ codeBtnText }}
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-button type="primary" size="large" class="verification"
                :disabled="!(code.length === 6 || verifyBtnIsDisabled)" :loading="verifyBtnIsDisabled"
                @click="vefifyCode">
                验证
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    ElMessage,
    ElNotification,
    type FormInstance,
    type FormRules,
} from 'element-plus'
import { debounce } from 'lodash'
import { useLoginStore } from '@/store/modules/login'
import type { SignupResponseData } from '@/api/signup/type'
import { reqGetVerificationCode, reqVerifyAuth } from '@/api/signup'
import { reqLogin } from '@/api/login'

const $router = useRouter()
let loginStore = useLoginStore()
let code = ref<string>('')

/* 获取验证码 */
// 验证码倒计时秒数
const countdown = 60
// 倒计时秒数
let leftSeconds = ref<number>(countdown)
// 验证码按钮可用性
let codeBtnIsDisabled = ref<boolean>(false)
// 验证码按钮文字
let codeBtnText = ref<string>('获取验证码')
// 验证码按钮加载
let codeBtnLoading = ref<boolean>(false)

/* 验证 */
// 验证按钮可用
let verifyBtnIsDisabled = ref<boolean>(false)

/* 校验规则 */
const codeFormRef = ref<FormInstance>()
const rules: FormRules = {
    code: [
        {
            validator: (_rules: any, val: string, callback: any) => {
                if (val.length > 6) {
                    code.value = val.slice(0, 6)
                }
                callback()
            },
            trigger: 'change',
        },
    ],
}

// 获取验证码，200ms 防抖
const getCode = debounce(async () => {
    codeBtnIsDisabled.value = true
    codeBtnLoading.value = true
    let res: SignupResponseData = await reqGetVerificationCode(
        loginStore.loginUser.email as string,
    )
    codeBtnLoading.value = false
    // 获取成功
    if (res.code === 200) {
        btnCountdown()
    } else {
        codeBtnIsDisabled.value = false
        ElMessage({
            type: 'error',
            message: '验证码获取失败',
        })
    }
}, 200)

// 验证码按钮倒计时
const btnCountdown = () => {
    let interval = setInterval(() => {
        codeBtnText.value = `${leftSeconds.value}s后重新获取`
        leftSeconds.value--
        if (leftSeconds.value == 0) {
            leftSeconds.value = countdown
            codeBtnText.value = '重新获取'
            codeBtnIsDisabled.value = false
            clearInterval(interval)
        }
    }, 1000)
}

// 验证，200ms 防抖
const vefifyCode = debounce(async () => {
    let { username, password, email } = loginStore.loginUser
    // 改为全大写
    let pureCode = code.value.toUpperCase()
    // 按钮不可用
    verifyBtnIsDisabled.value = true
    // 发送请求
    let res = await reqVerifyAuth(email as string, pureCode)
    if (res.code === 200) {
        // 自动登录(默认记住我)
        let loginRes = await reqLogin({ username, password, rememberMe: true })
        if (loginRes.code !== 200) {
            ElMessage({
                type: 'error',
                message: '自动登录失败',
            })
            return
        }
        ElNotification({
            message: `您好，${username}`,
            type: 'success',
            duration: 1500,
            showClose: false,
        })
        // 跳转主页
        $router.push('/')
    } else {
        ElMessage({
            type: 'error',
            message: '验证失败',
        })
    }
    verifyBtnIsDisabled.value = false
}, 200)
</script>

<style scoped lang="scss">
.app {
    width: 100vw;
    max-width: $max-viewport-width;
    min-width: $min-viewport-width;
    height: 100vh;
    max-height: $max-viewport-height;
    min-height: $min-viewport-height;
    background: url('@/assets/images/login_background.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 45%;
        height: 40%;
        border-radius: w(12);
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
        border: 1px solid #fff;
        background-color: var(--background-100);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: w(30) h(30);

        .verification-form {
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>

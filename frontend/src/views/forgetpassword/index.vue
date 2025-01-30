s
<template>
    <div class="app">
        <div class="container">
            <el-page-header @back="$router.back()">
                <template #content>
                    <span class="text-large font-600 mr-3">忘记密码</span>
                </template>
            </el-page-header>
            <div class="forget-form">
                <el-form
                    inline
                    :rules="rules"
                    :model="{ email }"
                    ref="forgetFormRef"
                >
                    <el-form-item prop="email">
                        <el-input placeholder="请输入邮箱" v-model="email" />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            size="default"
                            :disabled="resetPwdBtnDisabled"
                            :loading="resetPwdBtnDisabled"
                            @click="resetPassword"
                        >
                            找回密码
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { debounce } from 'lodash'
import { reqForgotPassword } from '@/api/login'

const $router = useRouter()
let email = ref<string>('')
const forgetFormRef = ref<FormInstance>()
let rules: FormRules = {
    email: [
        {
            required: true,
            validator: (_rules: any, val: any, callback: any) => {
                console.log(val)
                if (!val) {
                    return callback(new Error('请输入邮箱'))
                }

                let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
                if (!emailReg.test(val)) {
                    return callback(new Error('邮箱格式不正确'))
                }
                callback()
            },
            trigger: 'blur',
        },
    ],
}

// 按钮禁用
let resetPwdBtnDisabled = ref<boolean>(false)

// 找回密码
const resetPassword = debounce(async () => {
    await forgetFormRef.value?.validate()
    resetPwdBtnDisabled.value = true
    // 发送请求
    let res = await reqForgotPassword(email.value)
    if (res.code === 200) {
        ElMessage.success('找回密码邮件已发送，请查收')
        // 2s后跳转到登录页
        ElMessage.success('3s后跳转到登录页')
        setTimeout(() => {
            $router.push({ path: '/login' })
        }, 3000)
    } else {
        ElMessage.error(res.message)
    }
    resetPwdBtnDisabled.value = false
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
    background: url('@/assets/images/login_background.jpg') no-repeat center
        center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 40%;
        max-width: $max-viewport-width * 0.4;
        min-width: $min-viewport-width * 0.4;
        height: 30%;
        max-height: $max-viewport-height * 0.3;
        min-height: $min-viewport-height * 0.3;
        border-radius: 1.2rem;
        box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
        border: 0.1rem solid #fff;
        background-color: $background-100;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 3rem;

        .forget-form {
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>

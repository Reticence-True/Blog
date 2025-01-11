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
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { debounce } from 'lodash'
import { reqForgotPassword } from '@/api/login'

let email = ref<string>('')
const forgetFormRef = ref<FormInstance>()
let rules: FormRules = {
    email: [
        {
            required: true,
            validator: (rules: any, val: any, callback: any) => {
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
    } else {
        ElMessage.error(res.message)
    }
    resetPwdBtnDisabled.value = false
}, 200)
</script>

<style scoped lang="scss">
.app {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/login_background.jpg') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .container {
        width: 40%;
        height: 30%;
        border-radius: 12px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
        border: 1px solid #fff;
        background-color: #f9f8f8;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 30px;

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

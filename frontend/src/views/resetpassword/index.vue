<template>
    <div class="app">
        <div class="container">
            <el-page-header @back="$router.back()">
                <template #content>
                    <span class="text-large font-600 mr-3">重置密码</span>
                </template>
            </el-page-header>
            <div class="reset-form">
                <el-form
                    :model="resetPwd"
                    label-width="0"
                    :rules="rules"
                    ref="resetFormRef"
                >
                    <el-form-item prop="password">
                        <el-input
                            placeholder="新密码"
                            v-model="resetPwd.password"
                            clearable
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword">
                        <el-input
                            placeholder="确认新密码"
                            v-model="resetPwd.confirmPassword"
                            clearable
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            class="reset-btn"
                            :disabled="resetBtnDisabled"
                            :loading="resetBtnDisabled"
                            @click="resetPwdEvent"
                        >
                            重置密码
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { debounce } from 'lodash'
import { useRoute } from 'vue-router'
import { reqResetPassword } from '@/api/login'

const $route = useRoute()
const resetFormRef = ref<FormInstance>()
const resetPwd = reactive({
    password: '',
    confirmPassword: '',
})
// 存储邮箱
let email: string = ''

let rules: FormRules = {
    password: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 5, message: '密码长度不能小于5位', trigger: 'blur' },
    ],
    confirmPassword: [
        { required: true, message: '请再次输入新密码', trigger: 'blur' },
        {
            validator: (_rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'))
                } else if (value !== resetPwd.password) {
                    callback(new Error('两次输入密码不一致'))
                } else {
                    callback()
                }
            },
            trigger: 'change',
        },
    ],
}
// 按钮禁用
const resetBtnDisabled = ref(false)

// 重置密码事件，200ms防抖
const resetPwdEvent = debounce(async () => {
    await resetFormRef.value?.validate()
    resetBtnDisabled.value = true
    // 发送请求
    let res = await reqResetPassword(email, resetPwd.password)
    if (res.code === 200) {
        ElMessage.success('密码重置成功，请重新登录')
    } else {
        ElMessage.error(res.message)
    }
    resetBtnDisabled.value = false
}, 200)

onMounted(() => {
    let decodeQuery = atob($route.query.email as string)
    // 存储邮箱
    email = decodeQuery.split('+')[1]
})
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
        height: 35%;
        border-radius: 1.2rem;
        box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
        border: 0.1rem solid #fff;
        background-color: $background-100;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 4rem;

        .reset-form {
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding-top: 4.5rem;

            .reset-btn {
                margin: 0 auto;
            }
        }
    }
}
</style>

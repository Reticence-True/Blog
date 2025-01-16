<template>
    <div class="child-container">
        <div class="title">
            <div>登 录</div>
        </div>
        <div class="login-form">
            <el-form
                label-width="80rem"
                size="large"
                label-position="top"
                ref="loginFormRef"
                :rules="rules"
                :model="loginForm"
            >
                <el-form-item prop="username">
                    <el-input
                        placeholder="用户名"
                        size="large"
                        v-model="loginForm.username"
                        clearable
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        placeholder="密码"
                        size="large"
                        v-model="loginForm.password"
                        show-password
                        clearable
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox
                        label="记住我"
                        v-model="rememberMe"
                    ></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        :disabled="loginStore.btnsDisabled"
                        :loading="loginStore.btnsDisabled"
                        class="login-btn"
                        @click="login"
                    >
                        登录
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" link @click="forgotPwd">
                        忘记密码？
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'
import { ElNotification, FormInstance, FormRules } from 'element-plus'
import { reqLogin } from '@/api/login'
import { LoginUser } from '@/store/modules/type/login'
import { useLoginStore } from '@/store/modules/login'

const $router = useRouter()
const loginStore = useLoginStore()
let rememberMe = ref<boolean>(false)
let loginForm = reactive<LoginUser>({
    username: '',
    password: '',
})
const loginFormRef = ref<FormInstance>()

let rules: FormRules = {
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
    ],
}

// 200ms 防抖
const login = debounce(async () => {
    await loginFormRef.value?.validate()
    loginStore.setBtnsDisabled(true)
    let res = await reqLogin({
        ...loginForm,
        rememberMe: rememberMe.value,
    })
    if (res.code === 200) {
        ElNotification({
            message: `欢迎回来，${loginForm.username}`,
            type: 'success',
            duration: 1500,
            showClose: false,
        })
        // 跳转到首页
        $router.push('/')
    } else {
        ElNotification({
            message: res.message,
            type: 'error',
            duration: 1500,
            showClose: false,
        })
    }
    loginStore.setBtnsDisabled(false)
}, 200)

// 清理域
const clearFormFields = () => {
    Object.assign(loginForm, {
        username: '',
        password: '',
    })
    rememberMe.value = false
    // 清理表单验证
    loginFormRef.value?.resetFields()
}

// 忘记密码
const forgotPwd = () => {
    // 修改忘记密码标志位
    loginStore.setForgotPasswordFlag(true)
    // 用于页面跳转
    $router.push('/forget-password')
}

// 暴露函数
defineExpose({
    clearFormFields,
})
</script>
<script lang="ts">
export default {
    name: 'Login',
}
</script>

<style scoped lang="scss">
.child-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 6rem;
        color: #000;
    }

    .login-form {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .el-input {
            width: 100%;
            height: 5rem;
        }

        .login-btn {
            margin: 0 auto;
        }
    }
}
</style>

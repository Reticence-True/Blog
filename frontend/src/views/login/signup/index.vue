<template>
    <div class="child-container">
        <div class="title">注 册</div>
        <div class="signup-form">
            <el-form
                :inline="false"
                size="large"
                :model="userInfo"
                ref="signupFormRef"
                :rules="rules"
            >
                <el-form-item prop="username">
                    <el-input
                        placeholder="用户名"
                        size="large"
                        v-model="userInfo.username"
                        clearable
                    />
                </el-form-item>
                <el-form-item prop="email">
                    <el-input
                        placeholder="邮箱"
                        size="large"
                        v-model="userInfo.email"
                        clearable
                        type="email"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        placeholder="密码"
                        size="large"
                        show-password
                        v-model="userInfo.password"
                        clearable
                    />
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        :disabled="loginStore.btnsDisabled"
                        :loading="loginStore.btnsDisabled"
                        class="login-btn"
                        @click="signupEvent"
                    >
                        注册
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import {
    reqCheckExistsByEmail,
    reqCheckExistsByUsername,
    reqSignUp,
} from '@/api/signup'
import { UserInfo } from '@/api/signup/type'
import { useLoginStore } from '@/store/modules/login'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const loginStore = useLoginStore()
let signupFormRef = ref<FormInstance>()
let userInfo = reactive<UserInfo>({
    username: 'admin',
    password: '123456',
    email: '3328872822@qq.com',
})

// 规则函数
// 用户名
const usernameRulesFunc = async (_rule: any, val: any, callback: any) => {
    let trimVal = val.trim()
    if (!trimVal) return callback(new Error('用户名不能为空'))

    // 检查是否重名
    let res = await reqCheckExistsByUsername(trimVal)
    if (res.data?.exists) return callback(new Error('用户名已存在'))

    callback()
}
// 邮箱
const emailRulesFunc = async (_rule: any, val: any, callback: any) => {
    let trimVal = val.trim()
    if (!trimVal) return callback(new Error('邮箱不能为空'))
    // 正则邮箱匹配
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (!emailReg.test(trimVal)) return callback(new Error('邮箱格式不正确'))
    // 判断邮箱是否存在
    let res = await reqCheckExistsByEmail(trimVal)
    if (res.data?.exists) return callback(new Error('邮箱已存在'))

    callback()
}
// 密码
const passwordRulesFunc = (_rule: any, val: any, callback: any) => {
    let trimVal = val.trim()
    if (!trimVal) return callback(new Error('密码不能为空'))
    if (trimVal.length < 5) return callback(new Error('密码需要大于5位'))

    callback()
}
// 规则对象
let rules: FormRules = {
    username: [
        {
            required: true,
            asyncValidator: usernameRulesFunc,
            trigger: 'blur',
        },
    ],
    email: [
        {
            required: true,
            asyncValidator: emailRulesFunc,
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            validator: passwordRulesFunc,
            trigger: 'blur',
        },
    ],
}

// 注册按钮事件, 200ms 防抖
const signupEvent = debounce(async () => {
    loginStore.setBtnsDisabled(true)
    // 校验表单
    try {
        await signupFormRef.value?.validate()
    } catch (e) {
        loginStore.setBtnsDisabled(false)
        return
    }

    // 表单通过
    Object.assign(loginStore.loginUser, JSON.parse(JSON.stringify(userInfo)))
    // 发送注册请求
    let res = await reqSignUp(userInfo)
    if (res.code === 200) {
        $router.push('/email-verification')
    } else {
        ElMessage({
            type: 'error',
            message: '注册失败',
        })
    }
    loginStore.setBtnsDisabled(false)
}, 200)

// 清理域
const clearFormFields = () => {
    userInfo = {
        username: '',
        password: '',
        email: '',
    }
    // 清理表单验证
    signupFormRef.value?.resetFields()
}

// 暴露函数
defineExpose({
    clearFormFields,
})
</script>
<script lang="ts">
export default {
    name: 'Signup',
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
</style>

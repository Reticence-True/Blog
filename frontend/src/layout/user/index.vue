<template>
    <div class="user">
        <img src="@/assets/icons/vue.svg" alt="avatar" class="avatar" v-if="userStore.userInfo.atatarUrl" />
        <el-menu class="user-menu" mode="horizontal" :ellipsis="false">
            <el-sub-menu index="tabbarusermenu0" v-if="userStore.userInfo.username">
                <template #title>
                    {{ userStore.userInfo.username }}
                </template>
                <el-menu-item>我的信息</el-menu-item>
                <el-menu-item @click="logout">退出登录</el-menu-item>
            </el-sub-menu>
            <el-menu-item title="点击去登录" v-else @click="$router.push('/login')">
                未登录
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { reqLogout } from '@/api/login'
import { ElMessage } from 'element-plus'

const $router = useRouter()
const userStore = useUserStore()

// 退出登录函数
const logout = async () => {
    try {
        let res = await reqLogout()
        if (res.code === 200) {
            location.reload()
        }
    } catch (e) {
        ElMessage({
            type: 'error',
            message: '注销失败',
        })
    }
}
</script>
<script lang="ts">
export default {
    name: 'User',
}
</script>

<style scoped lang="scss">
.user {
    display: flex;
    align-items: center;
    font-size: w(18);
    margin-left: w(45);

    .avatar {
        width: clamp(30px, w(30), 50px);
        height: clamp(30px, w(30), 50px);
        border-radius: 50%;
        margin-right: w(10);
        border: 1px solid --text-primary;
    }

    .el-menu {
        height: 100%;
        background-color: transparent;
        border: none;

        :deep(.el-sub-menu__title) {
            font-size: clamp(16px, w(16), 20px);
            border: none;
        }
    }
}
</style>

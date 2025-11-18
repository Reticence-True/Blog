<template>
    <div class="tabbar-container" ref="tabbarContainerRef">
        <div class="tabbar-left">
            <Blog></Blog>
        </div>
        <div class="tabbar-right">
            <el-menu class="route-menu" mode="horizontal" router :default-active="$route.path">
                <Menu :constantRoutes="userStore.menuRoutes"></Menu>
            </el-menu>
            <User></User>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Blog from '@/layout/blog/index.vue'
import Menu from '@/layout/menu/index.vue'
import User from '@/layout/user/index.vue'

import { useUserStore } from '@/store/modules/user'
import { ref } from 'vue'

const userStore = useUserStore()
const $route = useRoute()

const tabbarContainerRef = ref<HTMLDivElement>()

// 设置tabbar是否透明
const isTabbarTransparent = (isTransparent: boolean) => {
    if (!tabbarContainerRef.value) {
        return
    }
    const tabbarContainer = tabbarContainerRef.value
    if (isTransparent) {
        tabbarContainer.classList.add('tabbar-container-transparent')
    } else {
        tabbarContainer.classList.remove('tabbar-container-transparent')
    }
}

defineExpose({
    isTabbarTransparent,
})

</script>
<script lang="ts">
export default {
    name: 'Tabbar',
}
</script>

<style lang="scss" scoped>
.tabbar-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    transition: background-color 0.15s ease-in-out;

    .tabbar-left {
        margin-left: w(120);
    }

    .tabbar-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: w(150);

        .route-menu {
            height: $tabbar-base-height;
            background-color: transparent;
            border-bottom: none;
        }
    }
}

.tabbar-container-transparent {
    background-color: transparent;
}
</style>

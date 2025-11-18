<template>
    <div class="layout">
        <div class="layout-tabbar">
            <Tabbar ref="layoutTabbarRef"></Tabbar>
        </div>
        <div class="layout-main">
            <el-scrollbar ref="layoutMainRef">
                <Main></Main>
            </el-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue';

const layoutTabbarRef = ref<any>()
const layoutMainRef = ref<any>()

// Main 组件滚动事件
const onLayoutMainScroll = (e: MouseEvent) => {
    // 滚动时设置tabbar透明
    layoutTabbarRef.value?.isTabbarTransparent((e.target as HTMLDivElement).scrollTop <= 0)
}

onMounted(() => {
    // 设置tabbar透明
    layoutTabbarRef.value?.isTabbarTransparent(true)
    // 绑定滚动事件
    layoutMainRef.value?.wrapRef.addEventListener('scroll', onLayoutMainScroll)
})

onBeforeUnmount(() => {
    // 移除滚动事件
    layoutMainRef.value?.removeEventListener('scroll', onLayoutMainScroll)
})
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    .layout-tabbar {
        width: 100%;
        height: clamp($tabbar-base-height* 1px, h($tabbar-base-height), $tabbar-base-height * 10px);
        min-width: inherit;
        max-width: inherit;
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        z-index: 2;
    }

    .layout-main {
        width: 100%;
        height: 100%;
        min-width: inherit;
        max-width: inherit;
        position: relative;
    }
}
</style>

<template>
    <div class="layout">
        <div class="layout-tabbar">
            <Tabbar></Tabbar>
        </div>
        <div class="layout-main">
            <el-scrollbar>
                <Main></Main>
            </el-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'


</script>

<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: 100vh;
    min-width: $min-viewport-width;
    max-width: $max-viewport-width;
    min-height: $min-viewport-height;
    max-height: $max-viewport-height;
    display: flex;
    position: relative;

    .layout-tabbar {
        width: 100%;
        height: $tabbar-base-height;
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
        min-height: inherit;
        max-height: inherit;
        position: relative;
    }
}
</style>

<template>
    <div class="layout">
        <div class="layout-tabbar">
            <Tabbar></Tabbar>
        </div>
        <div class="layout-main">
            <el-scrollbar class="scrollbar">
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
    width: 100%;

    .layout-tabbar {
        width: 100%;
        height: $tabbar-base-height;
        position: absolute;
        top: 0;
        left: 0;
    }

    .layout-main {
        width: 100%;
        height: calc(100vh - $tabbar-base-height);
        position: absolute;
        top: $tabbar-base-height;
        left: 0;
    }
}
</style>

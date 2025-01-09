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
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'

const $route = useRoute()
const userStore = useUserStore()
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
        .scrollbar {
            width: 80%;
            height: calc(100% - $tabbar-base-height);
            position: absolute;
            top: $tabbar-base-height;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>

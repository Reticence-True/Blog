<template>
    <div class="layout">
        <Tabbar></Tabbar>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import Tabbar from './tabbar/index.vue'

const $route = useRoute();
const userStore = useUserStore();

</script>

<style lang="scss" scoped>
.layout {

}
</style>
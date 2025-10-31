<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// onMounted
onMounted(() => {
    // 设置主题配色
    document.documentElement.dataset.theme = 'spring'
})
</script>

<style scoped></style>

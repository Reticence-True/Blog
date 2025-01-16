<template>
    <div class="container">
        <HomeHeader class="header"></HomeHeader>
        <HomeBody class="body"></HomeBody>
    </div>
</template>

<script setup lang="ts">
import HomeHeader from './header'
import HomeBody from './body'
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: calc(100vh - $tabbar-base-height);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    .header {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #797979;
    }

    .body {
        width: 100%;
    }
}
</style>

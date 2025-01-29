<template>
    <div class="container">
        <home-header class="header"></home-header>
        <home-body class="body"></home-body>
    </div>
</template>

<script setup lang="ts">
import HomeHeader from './header/index.vue'
import HomeBody from './body/index.vue'
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    max-width: $max-viewport-width;
    min-width: $min-viewport-width;
    height: calc(100vh - $tabbar-base-height);
    max-height: calc($max-viewport-height - $tabbar-base-height);
    min-height: calc($min-viewport-height - $tabbar-base-height);
    background-color: $background-100;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    .header {
        width: 100%;
        height: $header-height;
        max-height: $header-height;
        border-bottom: 0.1rem solid $background-300;
    }

    .body {
        width: 100%;
        height: calc(100% - $header-height);
        padding: 3rem;
    }
}
</style>

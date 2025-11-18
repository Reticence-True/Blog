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
    background: var(--background--200);
    padding-block-start: calc($tabbar-base-height);
    padding-block-end: h(40);

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    .header {
        width: 100%;
        padding-inline: w(300);
        margin-block-end: h(40);

    }

    .body {
        width: 100%;
        padding-inline: w(300);
    }

    &::after {
        content: '';
        width: 100%;
        height: clamp(calc(240px + $tabbar-base-height * 1px * 2), h(240 + $tabbar-base-height + $tabbar-base-height), 2400px);
        background: linear-gradient(0, #fff, var(--primary-l10) 50%, #fff);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

}
</style>

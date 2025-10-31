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
    margin-block-end: 4rem;
    padding-inline: 30rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    .header {
        width: 100%;
        margin-block-end: 4rem;
    }

    .body {
        width: 100%;
    }

}
</style>

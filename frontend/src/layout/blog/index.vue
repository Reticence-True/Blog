<template>
    <div class="blog">
        <img src="@/assets/icons/vue.svg" />
        <h1>Reticence 的博客</h1>
    </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
    name: 'Blog',
}
</script>

<style scoped lang="scss">
.blog {
    font-size: 1.8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }
}
</style>

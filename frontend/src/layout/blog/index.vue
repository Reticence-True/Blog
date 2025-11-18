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
    font-size: clamp(20px, w(20), 25px);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: clamp(30px, w(30), 50px);
        height: clamp(30px, w(30), 50px);
        margin-right: w(10);
    }
}
</style>

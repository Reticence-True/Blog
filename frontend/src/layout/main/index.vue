<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts"></script>
<script>
export default {
    name: 'BlogMain',
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 1rem;

    border: 1px solid #000;
}
</style>

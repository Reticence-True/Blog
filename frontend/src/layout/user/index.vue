<template>
    <div class="user">
        <img src="@/assets/icons/vue.svg" alt="avatar" class="avatar" />
        <span class="username">username</span>
    </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
    name: 'User',
}
</script>

<style scoped lang="scss">
.user {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    margin-left: 4.5rem;

    .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
        border: 1px solid $text-100;
    }
}
</style>

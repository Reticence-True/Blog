<template>
    <div class="user">
        <img src="@/assets/icons/vue.svg" alt="avatar" class="avatar">
        <span class="username">username</span>
    </div>
</template>

<script setup lang='ts'>

</script>
<script lang="ts">
export default {
    name: "User"
}
</script>

<style>
.user {
    display: flex;
    align-items: center;
    margin-left: 10px;

    img {
        border-radius: 50%;
    }
}
</style>
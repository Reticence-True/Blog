<template>
    <div class="tabbar-container">
        <div class="tabbar-left">
            <Blog></Blog>
        </div>
        <div class="tabbar-right">
            <Menu></Menu>
            <User></User>
        </div>
    </div>
</template>

<script setup lang="ts">
import Blog from "@/layout/blog/index.vue"
import Menu from "@/layout/menu/index.vue"
import User from "@/layout/user/index.vue"

</script>
<script lang="ts">
export default {
    name: "Tabbar"
}
</script>

<style lang="scss" scoped>
.tabbar-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 3px 3px 0px #BFBFBF;

    // background: #bfa;

    .tabbar-left {
        // background: orangered;
    }

    .tabbar-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
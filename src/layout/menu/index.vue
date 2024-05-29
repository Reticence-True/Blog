<template>
    <div class="menu">
        <div class="item">
            <el-icon>
                <Notebook />
            </el-icon>
            主页
        </div>
        <div class="item">帖子</div>
        <div class="item">留言板</div>
        <div class="item">友链</div>
        <div class="item">关于</div>
    </div>
</template>

<script setup lang='ts'>

</script>
<script lang="ts">
export default {
    name: "Menu"
}
</script>

<style>
.menu {
    display: flex;
    align-items: center;

    .item {
        margin: 0 10px;
    }
}
</style>
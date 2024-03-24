<template>
    <div class="tabbar-container">
        <div class="tabbar-left">
            <h1>Reticence的博客</h1>
        </div>
        <div class="tabbar-right">
            <el-icon><Notebook /></el-icon>
            <div class="item">主页</div>
            <div class="item">主页</div>
            <div class="item">主页</div>
            <div class="item">主页</div>
            <div class="item">主页</div>
        </div>
    </div>
</template>

<script setup>

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
        font-size: 1.1rem;
        display: flex;

        // background: orangered;
    }

    .tabbar-right {
        display: flex;

        // background: yellowgreen;

        .item {
            padding: 0 20px;
        }
    }
}
</style>
<template>
    <div class="head-container">
        <div class="header-text">
            <p>春</p>
            <p>Spring</p>
        </div>
        <div class="header-carousel">
            <el-carousel indicator-position="none" height="auto">
                <el-carousel-item v-for="item in 3" :key="item">
                    <img src="@/assets/images/login_background.jpg" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
    name: 'HomeHeader',
}
</script>

<style lang="scss" scoped>
.head-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 0 15rem;
    border-bottom: 1px solid $background-200;
    display: flex;
    overflow: hidden;

    .header-text {
        width: 50%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        p {
            font-size: 7rem;
            color: $primary-200;
            font-weight: bold;
        }
    }

    // 不能开 flex 布局，会将跑马灯挤下去
    .header-carousel {
        width: 50%;
        height: 100%;
        flex: 1;

        .el-carousel__item {
            width: 100%;
            height: $header-height;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>

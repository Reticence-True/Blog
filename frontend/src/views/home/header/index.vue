<template>
    <div class="head-container">
        <div class="header-text">
            <p>
                <span>春</span>
                <span :style="{ marginInline: '2rem' }">·</span>
                <span>Spring</span>
            </p>
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
    display: flex;
    flex-direction: column;

    .header-text {
        height: 24rem;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 7rem;
            color: var(--primary-base);
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    // 不能开 flex 布局，会将跑马灯挤下去
    .header-carousel {
        height: 28.8rem;
        aspect-ratio: 16/9;

        .el-carousel__item {
            width: 100%;
            height: 28.8rem;
            border-radius: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>

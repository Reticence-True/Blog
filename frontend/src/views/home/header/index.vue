<template>
    <div class="head-container">
        <div class="header-text">
            <p>
                <span>春</span>
                <span :style="{ marginInline: w(20) }">·</span>
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

<script setup lang="ts">
import { w } from '@/utils/responsiveSize'
</script>
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
        height: clamp(calc(240px + $tabbar-base-height * 1px), h(240 + $tabbar-base-height), 2400px);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block-end: $tabbar-base-height;
        margin-block-end: h(40);

        p {
            font-size: clamp(70px, w(70), 700px);
            color: var(--primary-base);
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    // 不能开 flex 布局，会将跑马灯挤下去
    .header-carousel {
        height: clamp(288px, h(288), 2880px);
        aspect-ratio: 16/9;

        .el-carousel__item {
            width: 100%;
            height: clamp(288px, h(288), 2880px);
            border-radius: w(10);
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

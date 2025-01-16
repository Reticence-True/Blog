<template>
    <div class="head-container">
        <el-row style="height: 100%">
            <!-- 文字 -->
            <el-col :span="8">
                <div class="header-text">
                    <p><span>春</span></p>
                    <p><span>Spring</span></p>
                </div>
            </el-col>
            <!-- 跑马灯 -->
            <el-col :span="16" style="margin: 3px 0">
                <el-carousel
                    height="24px"
                    type="card"
                    indicator-position="none"
                >
                    <el-carousel-item>
                        <div
                            style="
                                width: 32px;
                                height: 24px;
                                background-color: red;
                            "
                        ></div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div
                            style="
                                width: 32px;
                                height: 24px;
                                background-color: yellow;
                            "
                        ></div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
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
    padding: 0 15px;

    .header-text {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        padding: 1.3px 0;
        box-sizing: border-box;

        p {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            span {
                font-size: 10px;
                font-weight: bold;
                color: #509f26;
            }
        }
    }
}
</style>

<template>
    <div class="body-container" ref="bodyContainerRef">
        <div class="body-chart">
            <div class="body-title">
                数据概览
            </div>
            <el-row justify="space-between">
                <el-col :span="16">
                    <div class="top-chart" ref="customerFLowChartRef"></div>
                    <div class="bottom-statistics">
                        <span>上月访问人数：5 人</span>
                        <span>当前在线人数：3 人</span>
                    </div>
                </el-col>
                <el-col :span="7">
                    <el-row justify="space-between" :style="{ height: '100%', rowGap: h(20) }">
                        <record-card>
                            <template #title>今日访客</template>
                            <template #content>5 人</template>
                        </record-card>
                        <record-card>
                            <template #title>当前在线人数</template>
                            <template #content>5 人</template>
                        </record-card>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div class="body-essay" ref="bodyRight">
            <div class="new-text">最新内容</div>
            <div class="new-essays">
                <template v-for="count in essayItemCount" :key="count">
                    <essay-card ref="essayCardRef">
                        <template #title>文章标题 {{ count }}</template>
                        <template #content>
                            善体及律歌。针校培需案营？妈市班此现后住安你消帝。右给象倍跑九措。战实师界货医，考胶控故加变预万刘守叶。胡湖形洋功诗於每毛止节味。知百别尼她陆沿由师即型烧。粒还妒观思态超史承。善体及律歌。针校培需案营？妈市班此现后住安你消帝。右给象倍跑九措。战实师界货医，考胶控故加变预万刘守叶。胡湖形洋功诗於每毛止节味。知百别尼她陆沿由师即型烧。粒还妒观思态超史承。
                        </template>
                    </essay-card>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import getCssVariable from '@/utils/getCssVariable'
import { w, h } from '@/utils/responsiveSize'
import RecordCard from './record-card/index.vue'
import EssayCard from './essay-card/index.vue'

const bodyContainerRef = ref<HTMLElement>() // 容器Ref
const essayCardRef = ref<HTMLDivElement[] | HTMLDivElement>() // 文章卡片Ref

// 最大文章个数
const maxEssayItemCount: number = 3 // 手动修改，默认为3
// 文章项目个数
let essayItemCount: number = maxEssayItemCount // 默认为 最大文章个数
// 访问量图表
const customerFLowChartRef = ref<HTMLElement>()
let customerFLowChart: any = null


/**
 * 监听容器高度变化
 */
const observeBottomContainerHeight = () => {
    const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            if (entry.contentRect.height) {
                // 重新绘制文字
                Array.isArray(essayCardRef.value) ? essayCardRef.value?.forEach((essayCard) => {
                    (essayCard as any).textOverflowStyle()
                }) : (essayCardRef.value as any)?.textOverflowStyle()

                // 图表尺寸修改
                customerFLowChart?.resize()
            }
        }
    })
    observer.observe(bodyContainerRef.value as HTMLElement)

    // 卸载前，取消监听
    onBeforeUnmount(() => {
        observer.unobserve(bodyContainerRef.value as HTMLElement)
    })
}

/**
 * 流量图表
 */
const createFlowCharts = () => {
    const chartFontSize = parseInt(w(12)) < 12 ? 12 : w(12) // 图表全局字体大小
    customerFLowChart = echarts.init(customerFLowChartRef.value)
    customerFLowChart.setOption({
        grid: {
            right: '10%',
            left: '10%',
        },
        textStyle: {
            fontSize: chartFontSize,
            fontFamily: 'Alibaba PuHuiTi',
            color: getCssVariable('--text-primary'),
        },
        title: {
            text: '客流量曲线',
            textStyle: {
                fontFamily: 'Alibaba PuHuiTi',
                fontSize: parseInt(w(18)) < 18 ? 18 : w(18),
                fontWeight: 'bold',
            },
        },
        legend: {
            data: ['今日到访', '环比增长'],
            right: 0,
        },
        tooltip: {
            show: true,
            trigger: 'axis',
        },
        xAxis: {
            triggerEvent: true,
            data: [
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
                '星期日',
            ],
            axisLabel: {
                fontSize: chartFontSize,
                color: getCssVariable('--text-primary'),
                fontFamily: 'AlibabaPuHuiTi',
            },
        },
        yAxis: [
            {
                name: '访问人数',
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    fontSize: chartFontSize,
                    color: getCssVariable('--text-primary'),
                    fontFamily: 'AlibabaPuHuiTi',
                    formatter: '{value}人',
                },
            },
            {
                name: '增长比例',
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    fontSize: chartFontSize,
                    color: getCssVariable('--text-primary'),
                    fontFamily: 'AlibabaPuHuiTi',
                    formatter: '{value}%',
                },
            },
        ],
        series: [
            {
                name: '今日到访',
                type: 'bar',
                // data: [200, 400, 150, 200, 500, 600, 550],
                tooltip: {
                    valueFormatter(value: number) {
                        return value + ' 人'
                    },
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: getCssVariable('--accent-base'),
                            },
                            {
                                offset: 1,
                                color: getCssVariable('--accent-base') + '60',
                            },
                        ],
                    },
                },
            },
            {
                name: '环比增长',
                type: 'line',
                smooth: true,
                // 选择第二个y轴
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter(value: number) {
                        return value + '%'
                    },
                },
                // data: [0, 100, -62.5, 33.3, 150.0, 20.0, -8.0],
                symbol: 'circle',
                symbolSize: 14,
                lineStyle: {
                    width: 4,
                    color: getCssVariable('--primary-l5'),
                },
                itemStyle: {
                    color: getCssVariable('--primary-l5'),
                    borderWidth: 2,
                    borderColor: '#fff',
                },
            },
        ],
        // timeline
        // baseOption
        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 10000,
            data: [
                '2025年1月第1周',
                '2025年1月第2周',
                '2025年1月第3周',
                '2025年1月第4周',
                '2025年2月第1周',
                '2025年2月第2周',
                '2025年2月第3周',
                '2025年2月第4周',
            ],
            // 背景按钮
            itemStyle: { color: getCssVariable('--primary-l8') },
            // 选中的按钮
            checkpointStyle: { color: getCssVariable('--primary-base') },
            // 背景线段
            lineStyle: { color: getCssVariable('--primary-l9') },
            // 未选中文字
            label: { color: getCssVariable('--primary-l7') },
            // 控制按钮：播放，下一个和前一个
            controlStyle: { color: getCssVariable('--primary-l3') },
            // 走过的线段/选中按钮/背景按钮的样式
            progress: {
                lineStyle: { color: getCssVariable('--primary-l9') },
                itemStyle: { color: getCssVariable('--primary-l5') },
                label: { color: getCssVariable('--primary-base') },
            },
            // 鼠标悬停的线段/选中按钮/背景按钮的样式
            emphasis: {
                checkpointStyle: { color: getCssVariable('--primary-l3') },
                itemStyle: { color: getCssVariable('--primary-l3') },
                label: { color: getCssVariable('--primary-base') },
                controlStyle: { color: getCssVariable('--primary-l3') },
            },
            bottom: 0,
            padding: [5, 0, 0, 0],
        },
        // switchableOption
        options: [
            // 所有系列数据
            {
                title: { text: '2025年1月第1周客流量曲线' },
                series: [
                    { data: [200, 400, 150, 200, 500, 600, 550] },
                    { data: [0, 100, -62.5, 33.3, 150.0, 20.0, -8.0] },
                ],
            },
            {
                title: { text: '2025年1月第2周客流量曲线' },
                series: [
                    { data: [345, 678, 234, 456, 789, 123, 890] },
                    { data: [0, 20.0, -5.0, 15.2, 25.0, 5.0, -2.5] },
                ],
            },
            {
                title: { text: '2025年1月第3周客流量曲线' },
                series: [
                    { data: [456, 789, 123, 678, 234, 890, 345] },
                    { data: [0, 18.5, -3.0, 20.0, 30.0, 10.0, -1.0] },
                ],
            },
            {
                title: { text: '2025年1月第4周客流量曲线' },
                series: [
                    { data: [567, 890, 234, 789, 456, 123, 678] },
                    { data: [0, 25.0, -2.5, 18.0, 28.0, 8.0, -0.5] },
                ],
            },
            {
                title: { text: '2025年2月第1周客流量曲线' },
                series: [
                    { data: [678, 123, 345, 890, 567, 234, 789] },
                    { data: [0, -82.0, 180.5, 157.0, -24.0, -65.0, 236.0] },
                ],
            },
            {
                title: { text: '2025年2月第2周客流量曲线' },
                series: [
                    { data: [789, 234, 456, 123, 678, 890, 345] },
                    { data: [0, -70.3, 94.0, -73.0, 100.0, 31.0, -61.0] },
                ],
            },
            {
                title: { text: '2025年2月第3周客流量曲线' },
                series: [
                    { data: [890, 345, 567, 234, 123, 678, 456] },
                    { data: [0, -61.1, 64.0, -58.8, -47.0, 45.0, -32.0] },
                ],
            },
            {
                title: { text: '2025年2月第4周客流量曲线' },
                series: [
                    { data: [1000, 456, 678, 345, 234, 123, 890] },
                    { data: [0, -54.4, 48.6, -49.0, -32.0, -47.0, 620.0] },
                ],
            },
        ],
    })
}

onMounted(() => {
    // 监听文章容器高度变化
    observeBottomContainerHeight()
    // 生成流量图表
    createFlowCharts()
})
</script>
<script lang="ts">
export default {
    name: 'HomeBody',
}
</script>

<style scoped lang="scss">
.body-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .body-chart {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-block-end: h(40);

        .top-chart {
            height: clamp(310px, h(310), 3100px);
            background-color: #fff;
            border: 1px solid var(--border-color);
            border-radius: w(10);
            padding: w(10) h(10);
            margin-bottom: h(20);
        }

        .bottom-statistics {
            height: clamp(50px, h(50), 500px);
            background: linear-gradient(to right bottom,
                    var(--primary-l9),
                    var(--primary-l8));
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            border-radius: w(10);

            span {
                font-size: clamp(20px, w(20), 200px);
                color: var(--primary-d2);
            }
        }
    }

    .body-essay {
        width: 100%;
        height: 100%;
        flex: 3;
        display: flex;
        flex-direction: column;

        .new-text {
            font-size: clamp(22px, w(22), 220px);
        }

        .new-essays {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;

        }
    }

    .body-title {
        font-size: clamp(22px, w(22), 220px);
        margin-bottom: h(20);

    }
}
</style>

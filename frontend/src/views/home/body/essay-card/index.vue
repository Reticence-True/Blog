<template>
    <el-card class="essay-item" body-class="essay-item-body" ref="essayItemRef" :body-style="{
        padding: '0',
        height: '100%',
        overflow: 'hidden',
    }">
        <div style="height: 100%">
            <p class="essay-title" ref="essayTitleRef">
                <slot name="title"></slot>
            </p>
            <p class="essay-content" ref="essayContentRef">
                <slot name="content"></slot>
            </p>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { toInteger } from 'lodash';
import { CardInstance } from 'element-plus';

// 文章部分ref
const essayItemRef = ref<CardInstance>() // 文章项
const essayTitleRef = ref<HTMLElement>() // 文章标题
const essayContentRef = ref<HTMLElement>() // 文章内容

/**
 * 设置文章项文字溢出样式
 */
const textOverflowStyle = () => {
    const essayContent = essayContentRef.value

    if (!essayContent || !essayTitleRef.value || !essayItemRef.value) {
        return
    }

    const essayItem: HTMLElement = essayItemRef.value.$el
    const essayTitle = essayTitleRef.value

    // 文字容器高度：容器高度 - 标题高度 - 标题下外边距
    let contextContainerHeight: number =
        essayItem.clientHeight -
        essayTitle.clientHeight -
        parseFloat(getComputedStyle(essayTitle, null)['marginBottom'])
    // 获取行高
    let contextLineHeight: number = parseFloat(
        getComputedStyle(essayContent, null)['lineHeight'],
    )
    // 设置裁切行数
    essayContent.style.webkitLineClamp = toInteger(
        contextContainerHeight / contextLineHeight - 1,
    ).toString()
}

defineExpose({ textOverflowStyle })

</script>
<script lang="ts">
export default {
    name: 'EssayCard'
}
</script>

<style scoped lang="scss">
.essay-item {
    width: 100%;
    height: clamp(145px, calc(w(105) + h(40)), 1450px);
    background-color: #fff;
    border-radius: w(15);
    padding: h(20) w(50);
    margin-top: h(15);
    flex: 1;
    border: 1px solid var(--border-color);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 0 0 transparent;
    user-select: none;
    cursor: pointer;

    &-body {}


    &:hover {
        box-shadow: 0 5px 10px var(--border-color);
        transform: translateY(-5px);
    }

    .essay-title {
        font-size: clamp(20px, w(20), 200px);
        font-weight: bold;
        margin-bottom: h(5);
    }

    .essay-content {
        width: 100%;
        font-size: clamp(18px, w(18), 20px);
        line-height: clamp(22px, h(22), 22px);
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>
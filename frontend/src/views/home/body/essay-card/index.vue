<template>
    <el-card class="essay-item" ref="essayItemRef" :body-style="{
        padding: '0',
        height: '10.5rem',
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
import { CardInstance } from 'element-plus';
import { toInteger } from 'lodash';
import { ref } from 'vue';

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
    height: 100%;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    flex: 1;
    border: 1px solid var(--border-color);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 0 0 transparent;


    &:hover {
        box-shadow: 0 0.5rem 1rem var(--border-color);
        transform: translateY(-0.5rem);
    }

    .essay-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .essay-content {
        width: 100%;
        font-size: 1.8rem;
        line-height: 2.2rem;
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>
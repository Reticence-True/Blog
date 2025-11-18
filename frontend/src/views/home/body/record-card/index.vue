<template>
    <div class="record-card">
        <div class="record-card-title">
            <slot name="title"></slot>
        </div>
        <div class="record-card-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>
<script>
export default {
    name: 'RecordCard'
}
</script>

<style scoped lang="scss">
.record-card {
    width: 100%;
    padding-block: h(30);
    border: 1px solid var(--border-color);
    border-radius: w(10);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: w(15) h(15);

    &-title {
        font-size: clamp(22px, w(22), 220px);
    }

    &-content {
        font-size: clamp(50px, w(50), 500px);
        font-weight: bold;
    }
}
</style>
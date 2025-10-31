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
    padding-block: 3rem;
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    &-title {
        font-size: 2.2rem;
    }

    &-content {
        font-size: 5rem;
        font-weight: bold;
    }
}
</style>
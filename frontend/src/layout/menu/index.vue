<template>
    <template v-for="route in constantRoutes" :key="route.path">
        <!-- 0 孩子 -->
        <el-menu-item
            :index="route.path"
            v-if="
                route.meta.isVisiable &&
                (!route.children || route.children.length === 0)
            "
        >
            {{ route.meta.name }}
        </el-menu-item>
        <!-- 1个孩子 -->
        <el-menu-item
            :index="route.children[0].path"
            v-if="
                route.children &&
                route.children.length === 1 &&
                route.children[0].meta.isVisiable
            "
        >
            {{ route.children[0].meta.name }}
        </el-menu-item>
        <!-- 多个孩子 -->
        <el-sub-menu
            :index="route.path"
            v-if="
                route.meta.isVisiable &&
                route.children &&
                route.children.length > 1
            "
        >
            <template #title>{{ route.meta.name }}</template>
            <Menu :constantRoutes="route.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
defineProps(['constantRoutes'])
</script>
<script lang="ts">
export default {
    name: 'BlogMenu',
}
</script>

<style scoped lang="scss">
.el-menu-item {
    font-family: 'Alibaba PuHuiTi';
    font-size: 1.5rem;
}
</style>

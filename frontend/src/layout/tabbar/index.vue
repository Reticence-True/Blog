<template>
  <div class="tabbar-container">
    <div class="tabbar-left">
      <Blog></Blog>
    </div>
    <div class="tabbar-right">
      <el-menu
        class="route-menu"
        mode="horizontal"
        router
        :default-active="$route.path"
      >
        ·
        <Menu :constantRoutes="userStore.menuRoutes"></Menu>
      </el-menu>
      <User></User>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Blog from '@/layout/blog/index.vue'
import Menu from '@/layout/menu/index.vue'
import User from '@/layout/user/index.vue'

import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const $route = useRoute()
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style lang="scss" scoped>
.tabbar-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0.3rem 0.3rem 0 #bfbfbf;

  .tabbar-left {
    // background: orangered;
  }

  .tabbar-right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .route-menu {
      height: $tabbar-base-height;
    }
  }
}
</style>

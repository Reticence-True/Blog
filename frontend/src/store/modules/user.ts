/** 用户仓库 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '@/routers/routers.ts'

export const useUserStore = defineStore('User', () => {
  // state
  const menuRoutes = ref(routes)

  // getter

  // action

  return {
    menuRoutes,
  }
})

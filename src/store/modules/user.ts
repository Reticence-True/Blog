/** 用户仓库 */
import { ref } from 'vue'
import { defineStore } from "pinia"

export const userUserStore = defineStore('User', () => {
    // state
    let count = ref(1)
    // getter

    // action

    return {
        count
    }
})
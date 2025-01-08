<template>
  <div>
    <div class="main-carousel"></div>
  </div>
</template>

<script setup>
import request from '@/utils/request'

request.get('/').then((res) => {
  console.log('res', res)
})
</script>

<style lang="scss" scoped></style>

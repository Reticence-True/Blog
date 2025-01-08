<template>
  <div class="child-container">
    <div class="title">
      <div>登 录</div>
    </div>
    <div class="login-form">
      <el-form
        label-width="80px"
        :inline="false"
        size="large"
        label-position="top"
      >
        <el-form-item>
          <el-input placeholder="用户名" size="large" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            size="large"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link
            type="info"
            size="small"
            :underline="false"
            target="_blank"
            href=""
          >
            忘记密码？
          </el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Login',
}
</script>

<style scoped lang="scss">
.child-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 6rem;
    color: #000;
  }

  .login-form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .el-input {
      width: 100%;
      height: 5rem;
    }

    .el-button {
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div class="login-form">
    <h3 class="title">找回密码</h3>
    <el-form :model="loginInfo" ref="loginForm">
      <el-form-item>
        <el-input
          type="password"
          v-model="loginInfo.userName"
          autocomplete="off"
          placeholder="密码"
        >
          <i slot="prefix" class="fa fa-user-o"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginInfo.text"
          autocomplete="off"
          placeholder="重复密码"
        >
          <i slot="prefix" class="fa fa-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="next" @click="handleNext"
          >完成</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      loginInfo: {
        userName: '',
        userPwd: '',
        autoLogin: true,
      }
    }
  },
  methods: {
    handleNext() {
      this.$router.replace({name: 'LoginIndex'})
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  .title {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    height: 50px;
  }
  i.fa {
    margin-left: 8px;
  }
  .el-input-group {
    line-height: unset !important;
  }
  .next {
    width: 100%;
  }
  .send_code {
    background: #409eff;
    color: #ffffff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>

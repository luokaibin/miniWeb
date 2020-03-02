<template>
  <div class="login-form">
    <h3 class="title">找回密码</h3>
    <el-form :model="PassWordInfo" :rules="rules" ref="passwordForm">
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="PassWordInfo.username"
          autocomplete="off"
          placeholder="请输入账号"
        >
          <i slot="prefix" class="fa fa-user-o"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          type="text"
          v-model="PassWordInfo.email"
          autocomplete="off"
          placeholder="密码"
        >
          <i slot="prefix" class="fa fa-envelope-o"></i>
          <el-button slot="append" class="send_code" @click="handleSendCode"
            >发送验证码</el-button
          >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="next" @click="handleNext"
          >下一步</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="js">
import {validateEmail, validateUserName} from '@/utils/tool';

export default {
  data() {
    return {
      PassWordInfo: {
        username: '',
        email: '',
      },
      rules: {
        username: [{ validator: validateUserName, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleNext() {
      this.$router.push({name: 'ResetPwd'})
    },
    async handleSendCode() {
      this.$message({
        message: '密码已发至您的邮箱,请注意查收',
        type: 'success'
      });
      this.$router.back();
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

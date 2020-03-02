<template>
  <div class="login-form">
    <h3 class="title">账号密码登录</h3>
    <el-form :model="loginInfo" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginInfo.username"
          autocomplete="off"
          placeholder="账号"
        >
          <i slot="prefix" class="fa fa-user-o"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          type="password"
          v-model="loginInfo.pwd"
          autocomplete="off"
          placeholder="密码"
        >
          <i slot="prefix" class="fa fa-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login_btn" @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <div class="login_footer">
          <el-checkbox v-model="loginInfo.autoLogin">7天内免登录</el-checkbox>
          <router-link class="link" :to="{ name: 'PassWord' }"
            >忘记密码？</router-link
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="js">
import { validateUserName, validateUserPwd } from '@/utils/tool';
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        pwd: '',
        autoLogin: '',
      },
      rules: {
        username: [{ validator: validateUserName, trigger: 'blur' }],
        pwd: [{ validator: validateUserPwd, trigger: 'blur' }],
      }
    }
  },
  methods: {
    async handleLogin() {
      try {
        await this.$refs.loginForm.validate();
        this.Cookies.set('auth', 'true', {domain: location.hostname});
        this.$router.replace({name: 'Index'});
      } catch (error) {}
    },
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
  .login_btn {
    width: 100%;
  }
  .login_footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .link {
      color: #409eff;
      text-decoration: none;
    }
  }
}
</style>

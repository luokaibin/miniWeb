<template>
  <div class="container">
    <div class="logo">
      <img
        class="img"
        src="https://cdn.ebaiyihui.com/webStatic/wechat-applets/zryh-hospital/zryh_logo_long_white.png"
        alt=""
        srcset=""
      />
    </div>
    <el-dropdown @command="handleClickMenu">
      <div class="user">
        <p class="role">{{ user.username }}</p>
        <img
          class="img"
          :src="require(`@/assets/admin.jpg`)"
          alt=""
          srcset=""
        />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="{ name: '个人中心', code: 'userCenter' }"
          >个人中心</el-dropdown-item
        >
        <el-dropdown-item
          divided
          :command="{ name: '注销登录', code: 'logout' }"
          >注销登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="js">
import { mapState } from "vuex";
const commantMap = new Map([
  ['userCenter', self => self.$router.push({name: 'User'})],
  ['logout', self => {
    self.Cookies.remove('auth');
    self.$router.replace({name: 'LoginIndex'});
  }]
])
export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    handleClickMenu(command) {
      const {code} = command;
      const fn = commantMap.get(code);
      fn(this);
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #495060;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 1em;
}
.logo,
.user {
  display: flex;
  color: #ffffff;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 1em;
}
.logo > .img {
  height: 60px;
  width: auto;
}
</style>

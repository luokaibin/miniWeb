<template>
  <div class="login-page">
    <div class="page-center">
      <div class="info">
        <div class="title">
          <img
            src="https://cdn.ebaiyihui.com/webStatic/wechat-applets/zdyfy-static/zdylogo.png"
            alt
          />
        </div>
      </div>
      <!-- 插槽 -->
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-index',
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  // background-image: url(../../assets/login-back.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  .page-center {
    position: absolute;
    width: 400px;
    height: 540px;
    margin: auto;
    top: 60px;
    right: 0;
    left: 0;
    .info {
      text-align: center;
      height: 110px;
      .title {
        display: flex;
        justify-content: center;
        align-items: Center;
        img {
          height: 60px;
          width: auto;
          padding-bottom: 3px;
        }
      }
    }
    .container {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
    }
  }
}
</style>

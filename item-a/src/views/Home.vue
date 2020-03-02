<template>
  <div class="home">
    <h2 class="h2">欢迎</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://static.jindll.com/static/other/timg.jfif);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h2 {
  color: #ffffff;
  margin-top: -120px;
  font-size: 68px;
}
</style>

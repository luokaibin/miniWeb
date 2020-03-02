<template>
  <div class="fixedLayout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      isFixedLayout: false,
    };
  },
  methods: {
    receiveMsg({ data }) {
      if (data.source !== 'main') {
        return;
      }
      const { name } = data;
      this.$router.push({ name });
    },
  },
  mounted() {
    window.addEventListener('message', this.receiveMsg);
  },
};
</script>

<style lang="less" scoped>
.fixedLayout {
  box-sizing: border-box;
  padding-left: 230px;
  padding-top: 130px;
  width: 100vw;
  height: 100vh;
}
</style>

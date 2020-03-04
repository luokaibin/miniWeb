<template>
  <div class="container">
    <iframe
      :class="{ item: true, cover_item: isCoverIframe }"
      :src="src"
      frameborder="0"
      name="content"
      id="content"
      ref="content"
      @load="postMsg"
      seamless
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: undefined,
      isLoadIframe: false, // Iframe是否加载完成
      isCoverIframe: false, // Iframe是否全屏
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  mounted() {
    window.addEventListener('message', this.receiveMsg);
    // this.init();
  },
  methods: {
    // 收到子窗口消息
    receiveMsg({ data }) {
      if (data.source !== 'content') {
        return;
      }
      const { action } = data;
      if (action === 'methodRun') {
        // 子级调用父级方法, 可以考虑是否可以接收数组, 一次调用多个方法, 方法是顺序执行, 还是Promise.all并行, 调用多个方法,参数如何接收
        // 子级要调用那个组件的方法等, 多预留扩展接口
        const { funName, params = undefined } = data;
        this[funName](params);
      }
    },
    // 弹出消息提示
    showMessage(options) {
      this.$message(options);
    },
    getIframe() {
      return window.frames['content'];
    },
    sendmessage(msg) {
      const content = this.getIframe();
      msg.source = 'main';
      const {
        meta: { orgin },
      } = this.$route;
      content.postMessage(msg, orgin);
    },
    postMsg() {
      this.isLoadIframe = true;
      this.init();
    },
    init() {
      console.log('测试是否打印');
      const {
        path,
        name,
        meta: { orgin, pathName },
      } = this.$route;
      if (this.src === `${orgin}${pathName}`) {
        this.sendmessage({ path, name });
      } else {
        this.src = `${orgin}${pathName}`;
      }
    },
    // 设置Iframe全屏
    setIframeCover() {
      this.isCoverIframe = true;
    },
    // 取消Iframe全屏
    cancelIframeCover() {
      this.isCoverIframe = false;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  flex: 1;
  overflow: hidden;
}
.item {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}
.cover_item {
  z-index: 2;
}
</style>

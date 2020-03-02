<template>
  <el-container class="main_container">
    <el-header class="main_header">
      <MainHeader />
    </el-header>
    <el-container class="main_content">
      <el-aside class="main_aside">
        <Menu />
      </el-aside>
      <el-main class="main_primary">
        <el-breadcrumb class="coutom_bread" separator="/">
          <el-breadcrumb-item
            v-for="item of breadcrumbList"
            :key="item.path"
            :to="{ path: item.path }"
            >{{ item.name }}</el-breadcrumb-item
          >
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="js">
import MainHeader from '@/components/header.vue';
import Menu from '@/components/menu.vue';
export default {
  components: {MainHeader,Menu},
  data() {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    '$route'(to) {
      this.initBreadcrumbData(to);
    }
  },
  methods: {
    initBreadcrumbData(router:any) {
      const breadcrumbList = [{path: '/', name: '后台管理系统'}];
      router.matched.forEach((item:any) => {
        if(item.path && item.meta.name) {
          breadcrumbList.push({path: item.path, name: item.meta.name});
        }
      });
      this.breadcrumbList = breadcrumbList;
    }
  },
  created() {
    this.initBreadcrumbData(this.$route);
  }
}
</script>

<style lang="scss" scoped>
.main_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.main_content {
  flex: 1;
  overflow-y: auto;
}
.main_header {
  height: 80px !important;
  padding: 0 !important;
}
.main_aside {
  width: 230px !important;
  border-right: 1px solid #efefef;
  background-color: #545c64;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.main_aside::-webkit-scrollbar {
  display: none;
}
.main_primary {
  padding: 0;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  .coutom_bread {
    height: 50px;
    background-color: #ffffff;
    box-sizing: border-box;
    padding-left: 1.5em;
    display: flex;
    align-items: center;
  }
}
</style>

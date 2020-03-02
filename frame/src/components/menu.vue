<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <template v-for="item of menuRouter">
      <el-menu-item
        v-if="item.children.length === 1"
        :index="item.children[0].path"
        :key="item.name"
      >
        <i :class="item.children[0].meta.icon"></i>
        <span slot="title">{{ item.children[0].meta.name }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.path" :key="item.name">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item
          v-for="el of item.children"
          :index="el.path"
          :key="el.name"
        >
          <i :class="el.meta.icon"></i>
          <span slot="title">{{ el.meta.name }}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="js">
import { mapState } from 'vuex';

export default {
  data() {
    return {
      activeMenu: '/index',

    }
  },
  computed: {
    ...mapState({
      menuRouter: state => state.menuRouter,
    })
  },
  watch: {
    '$route'(to) {
      this.initSubmenu(to);
    }
  },
  methods: {
    initSubmenu(router) {
      this.activeMenu = router.path;
    },
  },
  created() {
    this.initSubmenu(this.$router.currentRoute);
  }
}
</script>

<style lang="less" scoped>
i.fa {
  margin-right: 1em;
}
.el-menu-vertical {
  border-right: 0;
}
</style>

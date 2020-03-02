<template>
  <div class="page">
    <h3>表单录入</h3>
    <createForm class="form" :pushFormData="pushFormData" />
  </div>
</template>

<script>
import createForm from '@/components/createForm';
import { sendSuccessTip } from '@/utils/mixin';
export default {
  name: 'Table',
  mixins: [sendSuccessTip],
  components: {
    createForm,
  },
  methods: {
    pushFormData(data) {
      console.log(data);
      this.sendSuccessTip();
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  box-sizing: border-box;
  padding: 0 20px;
}
.form {
  width: 30%;
  min-width: 420px;
}
</style>

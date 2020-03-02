<template>
  <el-form
    :model="dataForm"
    :rules="formCreateRules"
    ref="form"
    label-width="100px"
    size="mini"
    label-position="left"
  >
    <el-form-item label="订单编号" prop="orderNo">
      <el-input v-model="dataForm.orderNo"></el-input>
    </el-form-item>
    <el-form-item label="收货人" prop="name">
      <el-input v-model="dataForm.name"></el-input>
    </el-form-item>
    <el-form-item label="总金额" prop="total">
      <el-input v-model="dataForm.total">
        <template slot="prepend">￥</template>
      </el-input>
    </el-form-item>
    <el-form-item label="应付金额" prop="amounts_payable">
      <el-input v-model="dataForm.amounts_payable">
        <template slot="prepend">￥</template>
      </el-input>
    </el-form-item>
    <el-form-item label="订单状态" prop="orderStatus">
      <el-select
        v-model="dataForm.orderStatus"
        placeholder="请录入订单状态"
        :popper-append-to-body="false"
        class="orderStatusClass"
        popper-class="orderStatusClass"
      >
        <el-option
          v-for="item in orderStatus"
          :key="item.statusCode"
          :label="item.statusText"
          :value="item.statusCode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="支付状态" prop="payStatus">
      <el-select
        v-model="dataForm.payStatus"
        placeholder="请录入支付状态"
        :popper-append-to-body="false"
        class="orderStatusClass"
        popper-class="orderStatusClass"
      >
        <el-option
          v-for="item in payStatus"
          :key="item.statusCode"
          :label="item.statusText"
          :value="item.statusCode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发货状态" prop="shipStatus">
      <el-select
        v-model="dataForm.shipStatus"
        placeholder="请录入发货状态"
        :popper-append-to-body="false"
        class="orderStatusClass"
        popper-class="orderStatusClass"
      >
        <el-option
          v-for="item in shipStatus"
          :key="item.statusCode"
          :label="item.statusText"
          :value="item.statusCode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="支付方式" prop="payMethod">
      <el-select
        v-model="dataForm.payMethod"
        placeholder="请录入支付方式"
        :popper-append-to-body="false"
        class="orderStatusClass"
        popper-class="orderStatusClass"
      >
        <el-option
          v-for="item in payMethods"
          :key="item.statusCode"
          :label="item.statusText"
          :value="item.statusCode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="配送方式" prop="deliveryMethod">
      <el-select
        v-model="dataForm.deliveryMethod"
        placeholder="请录入配送方式"
        :popper-append-to-body="false"
        class="orderStatusClass"
        popper-class="orderStatusClass"
      >
        <el-option
          v-for="item in deliveryMethods"
          :key="item.statusCode"
          :label="item.statusText"
          :value="item.statusCode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">立即录入</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { modelMap } from '@/static/data';
import { formCreateRules } from '@/utils/tool';
export default {
  name: 'CreateForm',
  props: {
    pushFormData: Function,
  },
  data() {
    return {
      dataForm: {
        orderNo: '',
        name: '',
        total: '',
        amounts_payable: '',
        orderStatus: '',
        payStatus: '',
        shipStatus: '',
        payMethod: '',
        deliveryMethod: '',
      },
      formCreateRules,
      orderStatus: modelMap.get('orderStatus'),
      payStatus: modelMap.get('payStatus'),
      shipStatus: modelMap.get('shipStatus'),
      payMethods: modelMap.get('payMethods'),
      deliveryMethods: modelMap.get('deliveryMethods'),
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.$refs.form.validate();
        this.pushFormData(this.dataForm);
        this.resetForm();
      } catch (error) {}
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
// 表单样式
.orderStatusClass {
  width: 100%;
}
</style>

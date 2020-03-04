<template>
  <div class="page">
    <searchRow :create="openDialog" />
    <div class="table-manage" ref="tableManage">
      <el-table
        :data="tableData"
        size="mini"
        :row-class-name="tableRowClassName"
        :height="height"
      >
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="订单编号"
          prop="orderNo"
          width="180"
        ></el-table-column>
        <el-table-column label="收货人" prop="name"></el-table-column>
        <el-table-column label="总金额" prop="total"></el-table-column>
        <el-table-column
          label="应付金额"
          prop="amounts_payable"
        ></el-table-column>
        <el-table-column label="订单状态" prop="orderStatus"></el-table-column>
        <el-table-column label="支付状态" prop="payStatus"></el-table-column>
        <el-table-column label="发货状态" prop="shipStatus"></el-table-column>
        <el-table-column label="支付方式" prop="payMethod"></el-table-column>
        <el-table-column
          label="配送方式"
          prop="deliveryMethod"
        ></el-table-column>
        <el-table-column
          label="下单时间"
          prop="createTime"
          width="150"
        ></el-table-column>
      </el-table>
    </div>
    <pagination :getTableData="getTableData"></pagination>
    <el-dialog
      title="数据录入"
      :visible.sync="dialogVisible"
      width="30%"
      :center="true"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <createForm :pushFormData="pushFormData" />
    </el-dialog>
  </div>
</template>

<script>
import searchRow from '@/components/searchRow';
import pagination from '@/components/pagination';
import createForm from '@/components/createForm';
import { sendSuccessTip } from '@/utils/mixin';
export default {
  name: 'Table',
  mixins: [sendSuccessTip],
  components: {
    searchRow,
    pagination,
    createForm,
  },
  data() {
    return {
      tableData: [],
      height: undefined,
      dialogVisible: false,
    };
  },
  methods: {
    tableRowClassName({ row }) {
      if (row.orderStatus === '已完成') {
        return 'finish-row';
      }
      if (row.orderStatus === '未付款') {
        return 'pending-row';
      }
      return 'doing-row';
    },
    getTableData() {
      const { tableData } = this.Mock.mock({
        'tableData|20': [
          {
            orderNo: '@id',
            name: '@cname',
            total: '￥ @float(3, 8000, 2, 2)',
            amounts_payable: '￥ @float(3, 8000, 2, 2)',
            'orderStatus|1': ['未付款', '待发货', '待收货', '待评价', '已完成'],
            'payStatus|1': ['未支付', '已支付'],
            'shipStatus|1': ['已发货', '未发货'],
            'payMethod|1': [
              '微信',
              '支付宝',
              '货到付款',
              '银行卡',
              '蚂蚁花呗',
              '京东白条',
            ],
            'deliveryMethod|1': [
              '圆通',
              '中通',
              '申通',
              '百世快递',
              '韵达',
              '顺丰',
              '邮政',
              'EMS',
              '天天快递',
            ],
            createTime: '@datetime("yyyy-MM-dd HH:mm")',
          },
        ],
      });
      this.tableData = tableData;
    },
    handleClose() {
      top.postMessage(
        {
          source: 'content',
          action: 'methodRun',
          funName: 'cancelIframeCover',
        },
        this.topOrgin,
      );
      this.dialogVisible = false;
    },
    openDialog() {
      this.dialogVisible = true;
      top.postMessage(
        {
          source: 'content',
          action: 'methodRun',
          funName: 'setIframeCover',
        },
        this.topOrgin,
      );
    },
    pushFormData(data) {
      this.handleClose();
      this.tableData.unshift(data);
      this.sendSuccessTip();
    },
  },
  created() {
    console.log(this.Cookies.get('auth'), '子组件');
    this.getTableData();
  },
  mounted() {
    this.height = this.$refs.tableManage.clientHeight;
  },
};
</script>

<style lang="less" scoped>
.page {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.table-manage {
  margin-top: 3px;
  margin-bottom: 3px;
  flex: 1;
  overflow-y: hidden;
}
/deep/.el-table .finish-row {
  background: rgb(200, 250, 176);
}
/deep/.el-table .doing-row {
  background: rgb(240, 230, 142);
}
/deep/.el-table .pending-row {
  background: #e9e2e2;
}
/deep/.el-table__body-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/deep/.el-table__body-wrapper::-webkit-scrollbar {
  display: none;
}
</style>

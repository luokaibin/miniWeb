const keyNameMap = new Map([
  ['orderNo', '订单编号'],
  ['name', '收货人'],
  ['total', '总金额'],
  ['amounts_payable', '应付金额'],
  ['orderStatus', '订单状态'],
  ['payStatus', '支付状态'],
  ['shipStatus', '发货状态'],
  ['payMethod', '支付方式'],
  ['deliveryMethod', '配送方式'],
]);
// 验证空值
const validateNullFn = (rule, value, callback) => {
  const { field } = rule;
  const keyName = keyNameMap.get(field);
  value = value.trim();
  value ? callback() : callback(new Error(`${keyName}不能为空`));
  return value ? true : false;
};
const inputValidate = [{ validator: validateNullFn, trigger: 'blur' }];
const selectValidate = [{ validator: validateNullFn, trigger: 'change' }];
export const formCreateRules = {
  orderNo: inputValidate,
  name: inputValidate,
  total: inputValidate,
  amounts_payable: inputValidate,
  orderStatus: selectValidate,
  payStatus: selectValidate,
  shipStatus: selectValidate,
  payMethod: selectValidate,
  deliveryMethod: selectValidate,
};

// 验证邮箱
export const validateEmail = (rule, value, callback) => {
  const email = value.trim();
  if (!email) {
    callback(new Error('邮箱不能为空'));
    return false;
  }
  // eslint-disable-next-line
  const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  if (!emailReg.test(email)) {
    callback(new Error('邮箱格式不正确'));
    return false;
  }
  callback();
  return true;
};
// 验证用户名不为空
export const validateUserName = (rule, value, callback) => {
  const username = value.trim();
  username ? callback() : callback(new Error('账号不能为空'));
  return username ? true : false;
};
// 验证密码不为空
export const validateUserPwd = (rule, value, callback) => {
  const pwd = value.trim();
  pwd ? callback() : callback(new Error('密码不能为空'));
  return pwd ? true : false;
};

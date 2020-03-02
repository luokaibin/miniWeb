module.exports = {
  configureWebpack: {
    externals: {
      Cookies: 'Cookies', // '包名':'全局变量'
    },
  },
};

module.exports = {
  publicPath: '/itemB/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  configureWebpack: {
    externals: {
      Mock: 'Mock', // '包名':'全局变量'
    },
  },
};

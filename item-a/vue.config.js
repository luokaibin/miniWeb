module.exports = {
  publicPath: '/itemA/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  configureWebpack: {
    externals: {
      Mock: 'Mock',
      Cookies: 'Cookies',
    },
  },
};

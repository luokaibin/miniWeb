const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  publicPath: '/frame/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      externals: {
        Cookies: 'Cookies', // '包名':'全局变量'
      },
      optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
      },
    };
  },
};

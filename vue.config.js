// vue.config.js
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 3,
          },
        },
      }));
  },
};

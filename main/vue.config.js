const path = require('path');

module.exports = {
  transpileDependencies: ['single-spa', 'qiankun', 'import-html-entry'],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV == "development") {
      config.devtool = "source-map";
    }
  }
};


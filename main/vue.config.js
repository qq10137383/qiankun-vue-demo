const path = require('path');

module.exports = {
  transpileDependencies: ['single-spa','qiankun','import-html-entry'],
  configureWebpack: {
    /**
     * main项目的public/index.html中使用了script加载了vue、vuex、vue-router、vue-i18n、element-ui模块(umd模式，
     * 详情见index.html中的注释)，加载完成后会在window对象上挂载Vue,Vuex,VueRouter,VueI18n,ELEMENT等对象，
     * 在main、app-vue-hash、app-vue-history的vue.config.js中指定了externals，指定了这几个对象的引用，所以这3个
     * 应用打包时不再从node_modules输出这几个模块，而是使用window上挂载的这几个对象代替，所以这几个项目都使用了公共的依赖，
     * 在原型链上挂载对象时要注意相互影响，好处就是减少了打包的体积和运行时的资源消耗。 
     * 经测试，未使用依赖共享时80M左右内存，使用依赖共享时30M左右内存。
     */
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      'element-ui': 'ELEMENT',
    }
  }
};


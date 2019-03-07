// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Http from './Util/Http'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
/* eslint-disable */
// eslint-disable-next-line
// 我们那个插件

// mock
import mock from  './api/mock';
// mock中用的，伏笔
Vue.createUrl = url => url;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


/**
 * 这是Vue插件的介绍。
 * Vue插件用来：
 *   1、添加全局的东西（比如Vue-router）
 *   2、扩展 Vue 实例方法（过把它们添加到 Vue.prototype 上实现）。
 */
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    // ...
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    // ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}

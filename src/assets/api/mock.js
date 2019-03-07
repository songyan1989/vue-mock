import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mocker from 'mockjs'

// 装配起来
const mock = new MockAdapter(axios)
// 通过mock生成随机数据
const trace = Mocker.mock({
  'rows|5-10': ['@name']
})
// reply的参数格式 (status, data, headers)
/**
 * 当Ajax通过Get方式获取login.json时
 * 返回数据
 *   状态：200
 *   数据：json （{view:...}）
 *   返回头： 默认值
 */
mock.onGet('/login.json').reply(200, {
  view: {
    name: 'login',
    action: '/login.json',
    title: 'EleAdmin后台',
    verifyImgUrl: '/ver.jpg'
  },
  trace
})
/**
 * 当Ajax向login.json发送（POST）数据时
 * 现实中应该干点事（比如通过查询数据库执行登录动作），
 * 然后返回完成结果
 * 这里返回数据
 *   状态：200
 *   数据：json （{...}）
 *   返回头： 默认值
 */
mock.onPost('/login.json').reply(200, {
  // 附加一些指令，比如跳转到
  next: '/index.json'
})

mock.onGet('/index.json').reply(200, {
  view: {
    name: 'admin',
    url: '/admin.json'
  },
  trace
})

mock.onGet('/admin.json').reply(200, {
  // ...
  trace
})

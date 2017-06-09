/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { history } from 'STORE'
import routes from 'ROUTE'

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 */
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}
if (__DEV__) {
  console.info('[当前环境] 开发环境')
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
}


const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  MOUNT_NODE
)

// === Webpack 处理 assets，取消注释即可进行测试 === //
/* 处理 less / sass */
// import 'ASSET/less/normalize.less'
// import 'ASSET/scss/normalize.scss'

/* 处理 img，小于 10KB 的转为 base64，否则使用 URL */
// import base64 from 'ASSET/img/smaller.png'
// import url from 'ASSET/img/larger.png'

// function appendImgToBody(content) {
//   const img = document.createElement('img')
//   img.src = content
//   document.body.appendChild(img)
// }

// appendImgToBody(base64)
// appendImgToBody(url)


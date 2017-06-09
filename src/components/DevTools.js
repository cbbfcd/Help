// 参考 http://www.zhufengpeixun.cn/article/151
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// 创建DevTools组件
const DevTools = createDevTools(
  
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    /* 设置默认隐藏，不然每次刷新都自动显示，相当烦人 */
    defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

export default DevTools

import React from 'react'
import Welcome from 'COMPONENT/Welcome'
/**
 * redux-devtools 是一个非常棒的工具，它可以让你实时的监控Redux的状态树的Store
 * 参考资料：http://www.jianshu.com/p/a2d4c1856560
 */
let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({children,location}) => (
  <div className="banner-t1">
    <div className="container" id="container">
    	{children}
    </div>
    { DevTools && <DevTools /> }
  </div>
)

export default App

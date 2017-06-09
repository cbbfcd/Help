import { injectReducer } from 'REDUCER'
export default {
  path: '/',

  component: require('COMPONENT/App').default,

  indexRoute: {
    component: require('COMPONENT/Welcome').default
  },
  
  childRoutes: [
    
    // 强制“刷新”页面
    { path: 'redirect', component: require('COMPONENT/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: require('COMPONENT/404').default }
  ]
}

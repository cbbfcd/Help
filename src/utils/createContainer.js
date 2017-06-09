import { connect } from 'react-redux'

/**
 * 封装connect的函数作为工具类
 * 参考: http://cn.redux.js.org/docs/react-redux/api.html
 */
export default function createContainer(mapStateToProps, actionCreators, component) {
  const connectComponent = connect(mapStateToProps, actionCreators)
  return component ? connectComponent(component) : connectComponent
}


/**
 * 还可以使用ES7语法的Decorator来实现
 *
 */
//================================================================================================
//  	@connect(
//  		state=>(
//	  		{
//	  			user:state.user
//	  		}
//  		),
//  		dispatch=>({
//  			...bindActionCreators({},dispatch)
//  		})
//  	)
//==================================================================================================

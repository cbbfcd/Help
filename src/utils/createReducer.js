/**
 * 创建一个reducer工具函数
 * @param initState--初始state
 * @param handlers--处理action的对象
 * @return 返回一个reducer函数
 */
export default function createReducer(initState, handlers) {
  return function reducer(state = initState, action) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

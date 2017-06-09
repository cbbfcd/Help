import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from 'REDUCER'
import middlewares from './middlewares'
import enhancers from './enhancers'
import syncHistoryWithStore from './syncHistoryWithStore'

const store = createStore(
  createRootReducer(),
  window.__INITIAL_STATE__ || {},
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)
export default store

export const history = syncHistoryWithStore(store)

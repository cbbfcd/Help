
import thunk from 'redux-thunk'
import { historyMiddleware } from './syncHistoryWithStore'

const middlewares = [thunk, historyMiddleware]

if (__DEV__) {
  const createLogger = require('redux-logger')
  middlewares.push(createLogger())
}

export default middlewares


import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// 载入 reducer
import home from '../reducers/home'
import footer from '../reducers/layout/footer'
import read from '../reducers/read/read'


// 创建全局 store 并加入router信息到redux reducers
const reducers=(history)=>combineReducers({
  home,
  read,
  footer,
  router: connectRouter(history),
})

export default reducers
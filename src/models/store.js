import { createStore, applyMiddleware ,compose} from 'redux'
import createHistory from "history/createHashHistory"
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import reducers from './reducers'
import Sage from './saga'

// 创建 Saga  
const sagaMiddleware = createSagaMiddleware()
// 创建 browser history
const history = createHistory()
// 创建全局 store
const store = createStore(
    reducers(history),
    compose(
        applyMiddleware(
          routerMiddleware(history), 
          sagaMiddleware
        ),
    )
);
// 运行Saga
sagaMiddleware.run(Sage)

export { sagaMiddleware , store ,history };

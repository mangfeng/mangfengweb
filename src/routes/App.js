import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {store ,history} from '../models/store'




// 首页路由组件
import Homes from '../routes/home/index'
import Read from '../routes/read/index'

// 关于
import About from '../routes/about/index'
// 错误路由匹配组件
import Error from '../routes/error'




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Homes} exact/>
            <Route path="/read" component={Read} />
            <Route path="/about" component={About}/>
            <Route component={Error} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

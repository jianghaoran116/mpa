/**
 * @file 路由入口文件
 * @author haoran
 */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Detail from 'view/detail/';
import NoMatch from 'view/404/';

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Index;

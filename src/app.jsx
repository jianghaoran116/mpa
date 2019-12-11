/**
 * @file 详情页面入口
 * @author haoran
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Index from './routes/index';

import './styles/reset.styl';
import './styles/app.styl';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));

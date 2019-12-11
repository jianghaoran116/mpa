/**
 * @file demo
 * @author haoran
 */

import React, { Component } from 'react';
import './index.styl';
import DemoImage from 'htmlimage/demo.png';

class Demo extends Component {
  render() {
    return (
      <div styleName="demo">
        demo
        <img
          src={DemoImage}
          alt="demo"
          title="demo"
        />
      </div>
    );
  }
}

export default Demo;

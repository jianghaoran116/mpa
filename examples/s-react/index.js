/**
 * @file 玩具react
 * @author haoran
 */
import main from "../../src/main";

const list = new Array(5).fill(1).map((num, index) => "prefix-" + index);

const { Sreact } = main;

const { React, ReactDOM } = Sreact;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    setTimeout(() => {
      console.log(list);
      this.setState({
        list,
      });
    }, 3000);
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "appContainer",
      },
      [
        React.createElement("div", {}, "这是上面的div"),
        this.state.list.map((item) => {
          return React.createElement(
            "span",
            {
              key: item,
            },
            "这是span"
          );
        }),
        this.state.list.map((item) => {
          return React.createElement(
            "span",
            {
              key: item,
            },
            "这是span"
          );
        }),
      ]
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("app"));

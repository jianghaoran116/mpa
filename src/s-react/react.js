class Component {
  constructor() {
    console.log('Component')
  }
}

const createElement = () => {
  console.log('createElement');
}

export default {
  Component,
  createElement,
};
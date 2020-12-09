/**
 * 组件的基类
 */
class Component {
  constructor() {
    console.log('Component')
  }
}

/**
 * 返回一个对象 - 记录节点的属性
 */
const createNode = ( type, props, children ) => {
  // 把children放到props上
  if ( children ) {
    props.children = children;
  }
  return {
    type: type,
    tag: typeof type === 'function' ? null : type,
    children: children,
  }
}

/**
 * 返回一个VDOM
 * @param {string | function} type - 'div', App
 * @param {object} props - 属性
 * @param {object} children - 子组件
 */
const createElement = ( type, props, children ) => {
  return createNode( type, props, children );
}

export default {
  Component,
  createElement,
};
import Reconciler from "./reconciler";

/**
 * 把container渲染到element上
 */
const render = (element, container) => {
  Reconciler.updateContainer(element, container);
};

export default {
  render,
}
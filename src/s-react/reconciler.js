/**
 * @file DIFF
 */

const oprations = {
  ReactComponentClass() {

  },
}

const Reconciler = {
  updateContainer: (element, container) => {
    console.log(oprations);
    console.log("element:::", element);
    console.log("container:::", container);
  }
}

export default Reconciler;
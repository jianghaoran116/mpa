// import rum from './design-patterns';
// import liquors from './arith-metic';
// import wheel from './wheel';
// import * as functional from './functional';

// export default {
//   wheel: wheel.getInstance(), // 轮子
//   ...rum, // 设计模式
//   ...liquors, // 算法
//   ...functional, // 函数式
// }

import DS from './datastructures/index';
import liquors from './arith-metic';
import MyPromise from './wheel/my-promise';
import Smobx from './s-mobx/s-mobx';
import Sreact from './s-react/index.js';

export default {
  DS,
  MyPromise,
  liquors,
  Smobx,
  Sreact
}

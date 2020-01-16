/**
 * @file 获取轮子
 * @author haoran
 */
import { callWheel } from './call-wheel'
import { applyWheel } from './apply-wheel'
import { bindWheel } from './bind-wheel'

const wheel = {
  callWheel,
  applyWheel,
  bindWheel,
}

class curlyhairWheel{
  static instance = null;

  static get() {
    if (!curlyhairWheel.instance) {
      curlyhairWheel.instance = new curlyhairWheel();
    }
    return curlyhairWheel.instance
  }

  /*
   * bindWheel
   */
  getWheel(type) {
    return wheel[type]
  }
}

export default curlyhairWheel;

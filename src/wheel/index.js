/**
 * @file 获取轮子
 * @author haoran
 */
import { callWheel } from './call-wheel';
import { applyWheel } from './apply-wheel';
import { bindWheel } from './bind-wheel';
import { createDebounce } from './debounce-wheel';
import { createThrottle } from './throttle-wheel';

const wheel = {
  callWheel,
  applyWheel,
  bindWheel,
  createDebounce,
  createThrottle,
}

class curlyhairWheel{
  static instance = null;

  static getInstance() {
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

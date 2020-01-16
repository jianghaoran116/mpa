/* eslint-disable no-unused-vars */
import { curlyhairWheel } from './main';

curlyhairWheel.get().getWheel('callWheel')();
curlyhairWheel.get().getWheel('applyWheel')();

let o = {
  'value': 1,
}

function test(...args) {
  console.log(this.value);
  console.log(args);
}

test.callWheel(o, 1, 2, 4);
test.applyWheel(o, [1, 2, 4]);
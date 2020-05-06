import curlyhairWheel from '../../src/main';

const { 
  wheel,
  curry,
} = curlyhairWheel;
// const createDebounce = wheel.getWheel('createDebounce');
const createThrottle = wheel.getWheel('createThrottle');

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  console.log(e);
  container.innerHTML = count++;
}

let curriedThrottle = curry(createThrottle);
let curriedUserAction = curriedThrottle(getUserAction);

// container.onmousemove = getUserAction;
// container.onmousemove = createThrottle(getUserAction, 1000);
container.onmousemove = curriedUserAction(1000);

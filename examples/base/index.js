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

// curriedThrottle(getUserAction)(1000);

// let partialThrottle = partial(createThrottle)
// console.log(partialThrottle(getUserAction))
// partialThrottle(getUserAction)(1000)()

// container.onmousemove = getUserAction;
// container.onmousemove = createDebounce(getUserAction, 1000);
// container.onmousemove = createThrottle(getUserAction, 1000);
container.onmousemove = curriedUserAction(1000);

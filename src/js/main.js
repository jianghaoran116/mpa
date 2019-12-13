import a from './a.js';

function query() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "data": {
          "list": [1, 2, 3]
        }
      })
    }, 2000)
  })
}

async function test() {
  const { data } = await query();
  console.log(data);
}

console.log(a);
test();

// eslint-disable-next-line no-undef
axios.get('./list')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});



import wine from '../../src/main';

const { tap } = wine;

[1, 2, 3].forEach((item) => {
  tap(item)(() => {
    console.log(item);
  })
})
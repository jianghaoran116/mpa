const configureStoreDev = require('./configureStore.dev');
const configureStoreProd = require('./configureStore.prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = configureStoreProd;
} else {
  module.exports = configureStoreDev;
}

const express = require('express');
const path = require('path');
const utils = require('./utils');
const listRouter = require('./list');

function init() {
  const app = express();

  app.use(express.static('./', {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: (res) => {
      res.set('x-timestamp', Date.now());
    },
  }));

  app.use('/list', listRouter);

  app.all('*', (req, res) => {
    utils.readContent(path.resolve(__dirname, '../'), '/index.html')
      .then((content) => {
        res.send(content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.listen('8081');
}

module.exports.init = init;

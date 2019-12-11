const express = require('express');
const config = require('../config.js');
const utils = require('./utils');

let staticDir = '';
let templateRootDir = '';
let publicPath = '';

if (process.env.NODE_ENV === 'production') {
  staticDir = config.static_dir_prod;
  templateRootDir = config.template_root_dir_prod;
  publicPath = config.public_path_prod;
} else {
  staticDir = config.static_dir_dev;
  templateRootDir = config.template_root_dir_dev;
  publicPath = config.public_path_dev;
};

function init() {
  const app = express();

  app.use(express.static(staticDir, {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }));

  app.all('*', (req, res) => {
    utils.readContent(templateRootDir, 'index.html')
      .then((content) => {
        res.send(content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.listen(config.port);
}

module.exports.init = init;

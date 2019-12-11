/**
 * @file 工具函数
 * @author haoran
 */
const fs = require('fs');

/**
 * 读取文件
 * 返回 thenable
 */
function readContent(ROOT_DIR, path) {
  return new Promise((resolve, reject) => {
    fs.readFile(ROOT_DIR + path, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(content);
    });
  });
}

module.exports = {
  readContent,
};

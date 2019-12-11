const numCPUs = require('os').cpus().length;
const cluster = require('cluster');
const server = require('./server');

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
} else {
  server.init();
}

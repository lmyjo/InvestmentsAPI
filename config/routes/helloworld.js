const handlers = require('../../lib/handlers');

module.exports = [
  {
    method: 'GET',
    path:   '/helloworld',
    handler: handlers.helloworld
  }
];

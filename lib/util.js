'use strict'

const url = require('url');
const config = require('../config/config');

module.exports = {
  getURI: function getURI (request, serviceName, composed) {
    let service = config.getService(serviceName);
    let urlObject = {
      protocol: service.protocol,
      host: service.host + ':' + service.port + composed,
      query: request.query
    }
    return url.format(urlObject);
  }
}

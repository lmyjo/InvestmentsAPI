"use strict"

const url = require('url');
const request = require('request');

module.exports = {
  forwardPost: function forwardPostRequest (urlObject, req, callback) {
    let newHeaders = {
      authorization: req.headers.authorization || '',
      'Content-Type': req.headers['Content-Type']
    };
    let options = {
      method: 'POST',
      json: true,
      uri: url.parse(urlObject),
      headers: newHeaders,
      body: req.payload
    };
    request.post(options, function requestCallback (err, response, body) {
      if(err) return callback(err);
      return callback(null, response, body);
    });
  },

  forwardPut: function forwardPutRequest (urlObject, req, callback) {
    let newHeaders = {
      authorization: req.headers.authorization || '',
      'Content-Type': req.headers['Content-Type']
    };
    let options = {
      method: 'PUT',
      json: true,
      uri: url.parse(urlObject),
      headers: newHeaders,
      body: req.payload
    };
    request.put(options, function requestCallback (err, response, body) {
      if(err) return callback(err);
      return callback(null, response, body);
    });
  },

  forwardGet: function forwardGetRequest (urlObject, req, callback) {
    let newHeaders = {
      authorization: req.headers.authorization || ''
    };
    let options = {
      method: 'GET',
      json: true,
      uri: url.parse(urlObject),
      headers: newHeaders
    };
    request.get(options, function requestCallback (err, response, body) {
      if(err) return callback(err);
      return callback(null, response, body);
    });
  },

  forwardDelete: function forwardDeleteRequest (urlObject, req, callback) {
    let newHeaders = {
      authorization: req.headers.authorization || ''
    };
    let options = {
      method: 'DELETE',
      json: true,
      uri: url.parse(urlObject),
      headers: newHeaders
    };
    request(options, function requestCallback (err, response, body) {
      if(err) return callback(err);
      return callback(null, response, body);
    });
  }
}

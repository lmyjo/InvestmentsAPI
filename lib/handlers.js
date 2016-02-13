"use strict"

const boom = require('boom');
const forwards = require('./forwards');
const util = require('./util');

function newResponse (response, err, res, body) {
  if (err) {
    let error = boom.create(err.status||502, err.message||'Bad Gateway');
    console.log(error);
    return response(error);
  }

  if (res.statusCode >= 400) {
    let error = boom.create(res.statusCode, body.error.message);
    return response(error);
  }

  return response(body).code(res.statusCode);
}

module.exports = {
  postHandler: function postHandler (request, response) {
    let serviceName = this.service;
    let composedURL = request.url.path.split('?')[0];
    let urlObject = util.getURI(request, serviceName, composedURL);
    forwards.forwardPost(urlObject, request, (err, res, body) => {
      return newResponse(response, err, res, body);
    });
  },

  putHandler: function putHandler (request, response) {
    let serviceName = this.service;
    let composedURL = request.url.path.split('?')[0];
    let urlObject = util.getURI(request, serviceName, composedURL);
    forwards.forwardPut(urlObject, request, (err, res, body) => {
      return newResponse(response, err, res, body);
    });
  },

  getHandler: function getHandler (request, response) {
    let serviceName = this.service;
    let composedURL = request.url.path.split('?')[0];
    let urlObject = util.getURI(request, serviceName, composedURL);
    forwards.forwardGet(urlObject, request, (err, res, body) => {
      return newResponse(response, err, res, body);
    });
  },

  deleteHandler: function deleteHandler (request, response) {
    let serviceName = this.service;
    let composedURL = request.url.path.split('?')[0];
    let urlObject = util.getURI(request, serviceName, composedURL);
    forwards.forwardDelete(urlObject, request, (err, res, body) => {
      return newResponse(response, err, res, body);
    });
  }
};

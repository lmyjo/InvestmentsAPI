"use strict";
const Joi = require('joi');

let header = Joi.object({
  'Authorization': Joi.string()
}).unknown();

let query = {
  'access_token': Joi.string()
};

module.exports.header = header;
module.exports.query = query;

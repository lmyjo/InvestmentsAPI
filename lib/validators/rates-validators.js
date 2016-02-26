"use strict";
const Joi = require('joi');

module.exports.getRate = {
  id: Joi.string()
         .required()
         .description('unique id of the rate')
};

module.exports.getType = {
  rateType: Joi.string()
         .required()
         .description('type of the rate')
};

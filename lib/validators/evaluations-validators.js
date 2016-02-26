"use strict";
const Joi = require('joi');

module.exports.getEvaluation = {
  project_id: Joi.string()
         .required()
         .description('unique id of the project'),
  id: Joi.string()
         .required()
         .description('unique id of the evaluation')
};

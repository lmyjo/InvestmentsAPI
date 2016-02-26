"use strict";
const Joi = require('joi');

let newProject = {
  name: Joi.string()
            .required()
            .description('name of the project'),
  startingDate: Joi.date()
               .required()
               .description('starting date of the project'),
  description: Joi.string()
               .required()
               .description('description of the project')
};


let updateProject = {
  name: Joi.string()
            .description('name of the project'),
  startingDate: Joi.date()
               .description('starting date of the project'),
  description: Joi.string()
               .description('description of the project')
};


module.exports.newProject = newProject;
module.exports.updateProject = updateProject;
module.exports.getProject = {
  id: Joi.string()
         .required()
         .description('unique id of the project')
}
module.exports.getProjectId = {
  project_id: Joi.string()
         .required()
         .description('unique id of the project')
}

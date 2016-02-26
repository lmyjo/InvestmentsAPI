"use strict";
const Joi = require('joi');

let newOwner = {
  email: Joi.string()
            .required()
            .description('email account of the owner'),
  username: Joi.string()
               .required()
               .description('unique username'),
  password: Joi.string()
               .required()
               .description('password of the owner')
};

let updateOwner = {
  email: Joi.string()
            .description('email account of the owner'),
  username: Joi.string()
               .description('unique username'),
  password: Joi.string()
               .description('password of the owner')
};

let loginOwner = {
  email: Joi.string()
            .description('email account of the owner'),
  username: Joi.string()
               .required()
               .description('unique username'),
  password: Joi.string()
               .required()
               .description('password of the owner')
};

module.exports.newOwner = newOwner;
module.exports.loginOwner = loginOwner;
module.exports.updateOwner = updateOwner;
module.exports.getOwner = {
  id: Joi.string()
         .required()
         .description('unique id of the owner')
};

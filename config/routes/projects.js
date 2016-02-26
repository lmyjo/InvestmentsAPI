"use strict";
const handlers = require('../../lib/handlers');
const projectsValidators = require('../../lib/validators/projects-validators');
const accessTokenValidator = require('../../lib/validators/access-token-validator');

module.exports = [
  {
    method: 'GET',
    path: '/api/projects/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get a project by its ID',
      notes: 'Get the information of the project by its ID',
      tags: ['api','owners'],
      validate: {
        params: projectsValidators.getProject,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 2
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/projects/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.putHandler,
      description: 'Modify the information of the project',
      notes: 'Modify the entire project by its properties',
      tags: ['api','owners'],
      validate: {
        payload: projectsValidators.newProject,
        params: projectsValidators.getProject,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 2
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/projects/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.deleteHandler,
      description: 'Delete the project instance',
      notes: 'Delete the project from the system',
      tags: ['api','owners'],
      validate: {
        params: projectsValidators.getProject,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 2
        }
      }
    }
  }
];

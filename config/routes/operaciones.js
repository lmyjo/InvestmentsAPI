"use strict";
const handlers = require('../../lib/handlers');
const projectsValidators = require('../../lib/validators/projects-validators');
const accessTokenValidator = require('../../lib/validators/access-token-validator');
const operacionesValidators = require('../../lib/validators/operaciones-validators');

module.exports = [
  {
    method: 'GET',
    path: '/api/projects/{project_id}/operaciones',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get all the operations of a project by its ID',
      notes: 'Get a list of the operations of the project by its ID',
      tags: ['api','owners'],
      validate: {
        params: projectsValidators.getProjectId,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/projects/{project_id}/operaciones',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.postHandler,
      description: 'Add a new operation',
      notes: 'Add a new operation to the project',
      tags: ['api','owners'],
      validate: {
        payload: operacionesValidators.newOperation,
        params: projectsValidators.getProjectId,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/projects/{project_id}/operaciones',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.deleteHandler,
      description: 'Delete all the operations',
      notes: 'Delete all the operations of the project',
      tags: ['api','owners'],
      validate: {
        params: projectsValidators.getProjectId,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/projects/{project_id}/operaciones/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get an operation from the project',
      notes: 'GET an operation of a project from its ID',
      tags: ['api','owners'],
      validate: {
        params: operacionesValidators.getOperation,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/projects/{project_id}/operaciones/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.putHandler,
      description: 'Modify an operation from the project',
      notes: 'Modify an operation of a project from its ID',
      tags: ['api','owners'],
      validate: {
        payload: operacionesValidators.updateOperation,
        params: operacionesValidators.getOperation,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/projects/{project_id}/operaciones/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.deleteHandler,
      description: 'Delete an operation from the project',
      notes: 'Delete an operation of a project from its ID',
      tags: ['api','owners'],
      validate: {
        params: operacionesValidators.getOperation,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 3
        }
      }
    }
  }
]

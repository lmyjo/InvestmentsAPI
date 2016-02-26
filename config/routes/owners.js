const handlers = require('../../lib/handlers');
const ownersValidators = require('../../lib/validators/owners-validators');
const projectsValidators = require('../../lib/validators/projects-validators');
const accessTokenValidator = require('../../lib/validators/access-token-validator');

module.exports = [
  {
    method: 'POST',
    path: '/api/owners',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.postHandler,
      description: 'Log on a new owner of a project',
      notes: 'Register a new owner user',
      tags: ['api','owners'],
      validate: {
        payload: ownersValidators.newOwner
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/owners/login',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.postHandler,
      description: 'Log in into the API',
      notes: 'Obtains the Access Token needed for every operation',
      tags: ['api','owners'],
      validate: {
        payload: ownersValidators.loginOwner
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/owners/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get an owner user information',
      notes: 'Get the information of an owner user by its ID',
      tags: ['api','owners'],
      validate: {
        params: ownersValidators.getOwner,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/owners/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.putHandler,
      description: 'Modify the owner information',
      notes: 'Modify the information of an owner by its ID',
      tags: ['api','owners'],
      validate: {
        params: ownersValidators.getOwner,
        payload: ownersValidators.updateOwner,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/owners/{id}/projects',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'GET all the projects of the owner',
      notes: 'List all the projects that the owner has',
      tags: ['api','owners'],
      validate: {
        params: ownersValidators.getOwner,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/owners/{id}/projects',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.postHandler,
      description: 'Add a project for the owner',
      notes: 'Add a new project to the owner account',
      tags: ['api','owners'],
      validate: {
        params: ownersValidators.getOwner,
        payload: projectsValidators.newProject,
        headers: accessTokenValidator.header,
        query: accessTokenValidator.query
      },
      plugins: {
        'hapi-swagger': {
          order: 1
        }
      }
    }
  }
];

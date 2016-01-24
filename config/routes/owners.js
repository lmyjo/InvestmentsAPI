const handlers = require('../../lib/handlers');

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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
    }
  }
];

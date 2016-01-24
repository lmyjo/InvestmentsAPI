const handlers = require('../../lib/handlers');

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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
    }
  }
]

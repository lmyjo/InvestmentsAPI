const handlers = require('../../lib/handlers');

module.exports = [
  {
    method: 'GET',
    path: '/api/projects/{project_id}/evaluaciones',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get all the evaluations of a project by its ID',
      notes: 'Get a list of the evaluations of the project by its ID',
      tags: ['api','owners']
    }
  },
  {
    method: 'DELETE',
    path: '/api/projects/{project_id}/evaluaciones',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.deleteHandler,
      description: 'Delete all the evaluation',
      notes: 'Delete all the evaluations of the project',
      tags: ['api','owners']
    }
  },
  {
    method: 'GET',
    path: '/api/projects/{project_id}/evaluaciones/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.getHandler,
      description: 'Get an evaluation from the project',
      notes: 'GET an evaluation of a project from its ID',
      tags: ['api','owners']
    }
  },
  {
    method: 'DELETE',
    path: '/api/projects/{project_id}/evaluaciones/{id}',
    config: {
      bind: {
        service: 'utility'
      },
      handler: handlers.deleteHandler,
      description: 'Delete an evaluation from the project',
      notes: 'Delete an evaluation of a project from its ID',
      tags: ['api','owners']
    }
  },
  {
    method: 'GET',
    path: '/api/projects/{project_id}/evaluaciones/last',
    config: {
      bind: {
        service: 'evaluation'
      },
      handler: handlers.getHandler,
      description: 'Get the last evaluation from the project',
      notes: 'Get the last evaluation of a project from its ID',
      tags: ['api','owners']
    }
  },
  {
    method: 'POST',
    path: '/api/projects/{project_id}/evaluaciones',
    config: {
      bind: {
        service: 'evaluation'
      },
      handler: handlers.postHandler,
      description: 'Evaluate the project',
      notes: 'Create an evaluation for the project',
      tags: ['api','owners']
    }
  }
]

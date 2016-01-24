const handlers = require('../../lib/handlers');

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
      tags: ['api','owners']
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
      tags: ['api','owners']
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
      tags: ['api','owners']
    }
  }
];

"use strict";
const handlers = require('../../lib/handlers');
const ratesValidators = require('../../lib/validators/rates-validators');

module.exports = [
  {
    method: 'GET',
    path: '/api/rates',
    config: {
      bind: {
        service: 'rates'
      },
      handler: handlers.getHandler,
      description: 'Get all the rates aviable',
      notes: 'Get a list of the rates aviable',
      tags: ['api','rates'],
      plugins: {
        'hapi-swagger': {
          order: 5
        }
      }
    }
  },
  {
    method:  'GET',
    path:    '/api/rates/{id}',
    config:  {
      bind: {
        service: 'rates'
      },
      handler: handlers.getHandler,
      description: 'Get a rate by its ID',
      notes: 'Get a rate object using its ID',
      tags: ['api','rates'],
      validate: {
        params: ratesValidators.getRate
      },
      plugins: {
        'hapi-swagger': {
          order: 5
        }
      }
    }
  },
  {
    method:  'GET',
    path:    '/api/rates/{rateType}/latest',
    config:  {
      bind: {
        service: 'rates'
      },
      handler: handlers.getHandler,
      description: 'Get the latest rate by type',
      notes: 'Get the latest rate by its type',
      tags: ['api','rates'],
      validate: {
        params: ratesValidators.getType
      },
      plugins: {
        'hapi-swagger': {
          order: 5
        }
      }
    }
  },
];

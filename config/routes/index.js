const owners = require('./owners');
const projects = require('./projects');
const operaciones = require('./operaciones');
const evaluaciones = require('./evaluaciones');
const rates = require('./rates');

module.exports = [{
    method: 'GET',
    path: '/',
    config: {
      handler: function (request, reply) {
        reply.redirect('/documentation');
      }
    }
}].concat(projects, owners, operaciones, evaluaciones, rates);

const owners = require('./owners');
const projects = require('./projects');
const operaciones = require('./operaciones');
const evaluaciones = require('./evaluaciones');
const rates = require('./rates');

module.exports = [].concat(projects, owners, operaciones, evaluaciones, rates);

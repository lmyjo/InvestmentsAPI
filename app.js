'use strict';

require('dotenv').load();

const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const pkg = require('./package.json');
const routes = require('./config/routes');

const swaggerOptions = {
  info: {
    title: 'Investments API',
    version: pkg.version,
  }
};

const server = Hapi.server({
  host: process.env.SERVICE_HOST,
  port: process.env.SERVICE_PORT
});

const pluginsArray = [inert, vision, {
  plugin: HapiSwagger,
  options: swaggerOptions
}];

server.route(routes);

const init = async () => {
  await server.register(pluginsArray);

  await server.start();

  console.log('Server running at: ', server.info.uri);
}

init()

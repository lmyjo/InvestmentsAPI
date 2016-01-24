const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const package = require('./package');
const config = require('./config/config');
const routes = require('./config/routes');

const server = new Hapi.Server();

const swaggerOptions = {
  info: {
    title: 'Investments API',
    version: package.version
  },
  basePath: '/api/',
  schemes: ['https'],
  tags: [
    {
      name: 'api/owners',
      description: 'Handling of owners of projects'
    }
  ]
};

server.connection({
  host: process.env.SERVICE_HOST,
  port: process.env.SERVICE_PORT
});

const pluginsArray = [inert, vision, {
  register: HapiSwagger,
  options: swaggerOptions
}];

server.register(pluginsArray, (err) => {
  if(err) {
    console.log(err);
    return;
  }

  server.route(routes);

  server.start(function starter() {
    console.log('Server running at: ', server.info.uri);
  });
});

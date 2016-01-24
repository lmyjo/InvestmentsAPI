const services = {
  utility: {
    host: process.env.UTILITY_HOST,
    port: process.env.UTILITY_PORT,
    protocol: process.env.UTILITY_PROTOCOL
  },

  evaluation: {
    host: process.env.EVALUATION_HOST,
    port: process.env.EVALUATION_PORT,
    protocol: process.env.EVALUATION_PROTOCOL
  },

  rates: {
    host: process.env.RATES_HOST,
    port: process.env.RATES_PORT,
    protocol: process.env.RATES_PROTOCOL
  }
};

module.exports.getService = function getServiceByKey (serviceName) {
  return services[serviceName] || null;
}

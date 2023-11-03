const swaggerOption = require('../doc');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const status = require('../src/health/routes');
const users = require('../src/users/routes');
const products = require('../src/products/routes');
const categories = require('../src/categories/routes');
const merchants = require('../src/merchants/routes');

// const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports = (app) => {
  app.use('/status', status);
  app.use('/users', users);
  app.use('/api/v1', products);
  app.use('/api/v1', categories);
  app.use('/api/v1/merchants', merchants);
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc(swaggerOption))
  );
  // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};

import express from 'express';

import middleware, { errorHandler, notFoundHandler } from './middleware';
import routes from './routes';

export default () => {
  const app = express();
  app.use(middleware);
  app.use(routes);
  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
};

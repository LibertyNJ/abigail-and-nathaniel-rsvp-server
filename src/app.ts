import cors from 'cors';
import express, { Express } from 'express';

import rsvpController from './controllers/rsvp';

export default () => {
  const app = express();
  loadMiddleware(app);
  loadRoutes(app);
  return app;
};

function loadMiddleware(app: Express) {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
}

function loadRoutes(app: Express) {
  app.get('/rsvp', rsvpController.get);
  app.post('/rsvp', rsvpController.post);
}

import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({
    info: 'Hello Node.js, Express with Babel, ESLint and Airbnb',
  });
});

export default routes;

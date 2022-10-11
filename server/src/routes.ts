import { Express, Response } from 'express';
import validate from './middleware/validateResource';
import { createUser } from './resources/users/user.controller';
import createUserSchema from './resources/users/user.schema';

function routes(app: Express) {
  app.get('/healthcheck', (req, res: Response) => {
    return res.sendStatus(200);
  });

  app.post('/api/users', validate(createUserSchema), createUser);
}

export default routes;

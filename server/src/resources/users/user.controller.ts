import { Request, Response } from 'express';
import logger from '../../utils/logger';
import { CreateUserInput, createUserSchema } from './user.schema';
import { createUserService } from './user.service';

export async function createUser(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
  try {
    // create user services
    const user = await createUserService(req.body);
    return user;
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

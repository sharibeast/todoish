import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({ required_error: 'Name is required' }),
    password: string({ required_error: 'Name is required' }).min(
      6,
      'Password should contain at least 6 characters',
    ),
    passwordonfirmation: string({ required_error: 'password confirmation is required' }),
    email: string({ required_error: 'Email is required' }).email('Not a valid email'),
  }).refine((data) => data.password === data.passwordonfirmation, {
    message: 'Password do not match',
    path: ['passwordConfirmation'],
  }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>;

export default createUserSchema;

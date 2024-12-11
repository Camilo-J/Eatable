import { tryit } from 'radashi';
import { AuthActionType } from '../../../constants/auth.ts';

type Error = {
  message: string;
}

type AuthAction = {
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (credentials: { email: string; password: string }) => Promise<void>;
  option: 'login' | 'signup';
}

export function authAction({ login, signup, option }: AuthAction) {
  return async (_error: Error, credentials: FormData) => {
    if (option === AuthActionType.LOGIN) {
      const [error] = await tryit(login)({
        email: credentials.get('email') as string,
        password: credentials.get('password') as string
      });

      return { message: error?.message || '' };
    }
    // signup
    const [error] = await tryit(signup)({
      email: credentials.get('email') as string,
      password: credentials.get('password') as string
    });

    return { message: error?.message || '' };
  };
}
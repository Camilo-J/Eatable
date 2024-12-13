import { authAction } from '@/pages/Session/actions/auth.ts';

describe('authAction', () => {
  it('should return a function and execute it to log in', async () => {
    const action = authAction({ login: vi.fn(), signup: vi.fn(), option: 'login' });

    const response = await action({ message: '' }, new FormData());

    expect(action).toBeInstanceOf(Function);
    expect(response).toEqual({ message: '' });
  });

  it('should return a function and execute it to sign up', async () => {
    const action = authAction({ login: vi.fn(), signup: vi.fn(), option: 'signup' });

    const response = await action({ message: '' }, new FormData());

    expect(action).toBeInstanceOf(Function);
    expect(response).toEqual({ message: '' });
  });
});
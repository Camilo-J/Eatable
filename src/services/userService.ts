import collectionClient from './collection-client';
import { User } from '@/types/user.ts';
import { omit } from 'radashi';
import { tokenKey } from '@/constants/setting.ts';

export async function updateUser(userData: Partial<User>) {
  const response = await collectionClient<User>('/profile', {
    method: 'PATCH',
    body: userData
  });

  sessionStorage.setItem(tokenKey, response.token as string);
  return omit(response, ['token']);
}

export async function getUser() {
  const response = await collectionClient<User>('/profile');

  return omit(response, ['token']);
}

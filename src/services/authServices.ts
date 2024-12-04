import collectionClient from './collection-client';
import { User } from '../types/user';
import { omit } from 'radashi';
import { tokenKey } from '../constants/setting';
import { Credentials } from '../types/auth';

export async function login(credentials: Credentials) {
  const response = await collectionClient<User>('/login', {
    body: credentials
  });

  sessionStorage.setItem(tokenKey, response.token);
  return omit(response, ['token']);
}

export async function signup(userData: Credentials) {
  const response = await collectionClient<User>('/users', {
    body: userData
  });

  sessionStorage.setItem(tokenKey, response.token);
  return omit(response, ['token']);
}


export async function logout() {
  await collectionClient('/logout', { method: 'DELETE' });

  sessionStorage.removeItem(tokenKey);
}

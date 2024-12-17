import { BASE_URI, tokenKey } from '@/constants/setting.ts';
import { tryit } from 'radashi';

interface CollectionClientOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
}

export default async function collectionClient<T>(
  endpoint: string,
  { method, headers, body } = {} as CollectionClientOptions
) {
  const token = sessionStorage.getItem(tokenKey);

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers
    };
  }

  if (body) {
    headers = {
      'Content-Type': 'application/json',
      ...headers
    };
  }

  const config = {
    method: method || (body ? 'POST' : 'GET'),
    headers,
    body: body ? JSON.stringify(body) : null
  };

  const response = await fetch(`${BASE_URI}${endpoint}`, config);

  const getResponse = async () => {
    if (response.status === 204) return null;
    return await response.json();
  };

  if (!response.ok) {
    const [error, bodyResponse] = await tryit(getResponse)();

    if (error) throw new Error(error.message);

    throw new Error(JSON.stringify(bodyResponse.errors));
  }

  const [error, bodyResponse] = await tryit(getResponse)();

  if (error) throw new Error(error.message);

  return bodyResponse as T;
}

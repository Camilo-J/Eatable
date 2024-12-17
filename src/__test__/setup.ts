import { afterAll, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from '@/mock';
import '@testing-library/jest-dom/vitest';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

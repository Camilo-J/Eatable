import { defineConfig } from 'vite';
import { resolve } from 'path';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => ({
  plugins: [react()],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__test__/setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: [...(configDefaults.coverage.exclude ?? []), 'src/types',
        'src/constants', 'src/services', 'src/store', 'src/mock', 'src/**.tsx', './**.config.js']
    }
  }
}));

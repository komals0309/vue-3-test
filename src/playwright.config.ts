import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium',
    headless: true, // Set to false to see the browser during tests
    baseURL: 'http://localhost:3000', // Your local dev server URL
  },
});

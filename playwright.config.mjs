import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080',
  },
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'python -m http.server 8080',
        url: 'http://127.0.0.1:8080',
        reuseExistingServer: true,
        timeout: 15000,
      },
});

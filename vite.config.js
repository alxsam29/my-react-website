import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    // Allow the preview proxy host in sandbox mode
    allowedHosts: process.env.BASE44_PREVIEW_MODE === '1' ? true : undefined,
    watch: {
      usePolling: true,
      interval: 1000,
    }
  }
});

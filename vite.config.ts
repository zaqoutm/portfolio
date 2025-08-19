import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio',
  plugins: [react()],
  server: {
    port: 4000,
    open: true,
  },
});

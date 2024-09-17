import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Your Express server
        changeOrigin: true,
        secure: false,  // If you're not using HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''),  // Adjust if necessary
      },
    },
  },
});
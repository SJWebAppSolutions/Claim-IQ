import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    define: {
      process: {
        env: process.env,
      },
    },
    plugins: [
      react({
        include: '**/*.tsx',
      }),
      {
        name: 'modulepreload',
        transformIndexHtml(html) {
          return html
            .replace(
              /rel="modulepreload"/g,
              'rel="modulepreload" fetchPriority="low"'
            )
            .replace(
              /type="module" crossorigin/,
              'type="module" fetchPriority="low"'
            );
        },
      },
    ],
    resolve: {
      alias: {
        '@fonts': '/src/assets/fonts/',
        '@images': '/src/assets/images/',
        '@icons': '/src/assets/icons/',
      },
    },
    server: {
      fs: {
        strict: false,
      },
      port: 3000,
      proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
    },
  };
});

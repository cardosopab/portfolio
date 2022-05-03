import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const { resolve } = require('path')
// const { defineConfig } = require('vite')

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    rollupOptions: {
      input:{
        main: resolve(__dirname, 'index.html'),
        src: resolve(__dirname, 'src/thankyou.html'),
      }
    }
  },
});

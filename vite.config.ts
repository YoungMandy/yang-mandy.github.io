import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@framework': fileURLToPath(new URL('./src/framework', import.meta.url)),
    },
  },
  build: {
    outDir: 'docs',
  },
  // 确保 assetsInclude 正确处理 .Vue 文件中的资源
  assetsInclude: [
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg',
    '**/*.ttf',
    '**/*.woff',
    '**/*.woff2',
    '**/*.Vue', // 这一行是新增的
  ],
});

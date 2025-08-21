import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteMockServe } from 'vite-plugin-mock';
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase', // 支持 styles.myClass
      // generateScopedName: '[name]__[local]___[hash:base64:5]' // 自定义哈希格式
    },
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: './src/api/mock',
    }),
  ],
  // 共享别名配置
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/pages': '/src/pages',
      '@/stores': '/src/stores',
      '@/utils': '/src/utils',
      '@/types': '/src/types',
      '@/api': '/src/api',
      '@/services': '/src/services',
      '@/router': '/src/router',
      '@/assets': '/src/assets',
      '@public/*': '/public/*',

      // // 调试react源码时用的
      // react: path.posix.resolve('src/react/packages/react'),
      // 'react-dom': path.posix.resolve('src/react/packages/react-dom'),
      // 'react-dom-bindings': path.posix.resolve(
      //   'src/react/packages/react-dom-bindings'
      // ),
      // 'react-reconciler': path.posix.resolve(
      //   'src/react/packages/react-reconciler'
      // ),
      // scheduler: path.posix.resolve('src/react/packages/scheduler'),
      // shared: path.posix.resolve('src/react/packages/shared'),
    },
  },
});

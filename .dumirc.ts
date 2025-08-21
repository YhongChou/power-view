import os from 'node:os';
import path from 'path';
import { defineConfig } from 'dumi';

import { version } from './package.json';

export default defineConfig({
  plugins: ['dumi-plugin-color-chunk'],

  // For <Link prefetch />
  routePrefetch: {},
  manifest: {},

  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [/index\/components\//],
  },
  ssr:
    process.env.NODE_ENV === 'production'
      ? {
          builder: 'mako',
        }
      : false,
  hash: true,
  mfsu: false,
  crossorigin: {},
  runtimePublicPath: {},
  outputPath: '_site',
  resolve: {
    // docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'src/components' }], // 组件文档目录
  },
  alias: {
    '@': require('path').resolve(__dirname, 'src'), // 保持与vite相同的别名
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  define: {
    antdReproduceVersion: version,
  },
  externals: {
    // optimize build of GPT-Vis
    'mapbox-gl': 'mapboxgl',
    'maplibre-gl': 'maplibregl',
  },
  metas: [
    { name: 'theme-color', content: '#1677ff' },
    { name: 'build-time', content: Date.now().toString() },
    // https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables
    { name: 'build-hash', content: process.env.GITHUB_SHA ?? 'unknown' },
  ],
  analyze:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          analyzerPort: 'auto',
        },
  themeConfig: {
    name: '番茄种植', // 导航栏标题
    logo: '/favicon.png',
    nav: [
      // { title: '导航', link: '/index' },
      { title: '组件', link: '/components' },
    ],
  },

  analytics: {
    // google analytics 的 key (GA 4)
    ga_v2: 'G-abcdefg',
  },
});

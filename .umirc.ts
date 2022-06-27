import { defineConfig } from 'dumi';

const { NODE_ENV } = process.env;
export default defineConfig({
  title: 'xin-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/xin-ui/',
  publicPath: NODE_ENV === 'production' ? '/xin-ui/' : '/xin-ui/',
  // more config: https://d.umijs.org/config
});

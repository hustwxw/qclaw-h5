import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Mobile H5',
  hash: true,
  history: { type: 'hash' },
  
  // 路由配置
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/message', component: '@/pages/message/index' },
        { path: '/user', component: '@/pages/user/index' },
        { path: '/demo', component: '@/pages/demo/index' },
        { path: '/antd', component: '@/pages/antd/index' },
        { path: '/vant', component: '@/pages/vant/index' },
      ],
    },
  ],

  // 主题配置
  theme: {
    '@brand-primary': '#1677ff',
  },

  // 代理配置
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },

  // 构建配置
  esbuildMinifyIIFE: true,
});

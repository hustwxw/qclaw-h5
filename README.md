# Mobile H5 框架

基于 Umi + React + Antd Mobile + Vant + Dva 构建的移动端 H5 开发框架。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [Umi](https://umijs.org/) | 4.x | 企业级前端框架，开箱即用 |
| [React](https://react.dev/) | 18.x | UI 框架 |
| [Antd Mobile](https://mobile.ant.design/) | 5.x | Ant Design 移动端组件库 |
| [React Vant](https://react-vant.3lang.dev/) | 3.x | Vant 的 React 版本，轻量移动端组件库 |
| [Dva Core](https://dvajs.com/) | 2.x | 基于 Redux 的状态管理方案 |
| TypeScript | 5.x | 类型支持 |

## 项目结构

```
F:\code\mobile\
├── .umirc.ts              # Umi 配置文件
├── package.json           # 依赖配置
├── tsconfig.json          # TypeScript 配置
├── .env                   # 环境变量
├── public/                # 静态资源
│   └── favicon.ico
└── src/
    ├── layouts/           # 布局组件
    │   ├── index.tsx      # 底部导航布局
    │   └── index.less
    ├── pages/             # 页面组件
    │   ├── index.tsx      # 首页
    │   ├── index.less
    │   ├── message/       # 消息页
    │   ├── user/          # 我的页
    │   ├── demo/          # 组件演示页
    │   ├── antd/          # Antd 组件演示
    │   └── vant/          # Vant 组件演示
    ├── models/            # Dva Models
    │   └── global.ts      # 全局状态
    ├── services/          # API 服务
    │   ├── request.ts     # 请求封装
    │   └── api.ts         # 接口定义
    ├── components/        # 公共组件
    └── assets/            # 静态资源
```

## 功能特性

### 1. 底部导航（TabBar）
- 首页、消息、我的三个 Tab
- 支持路由切换
- 固定在底部，适配安全区域

### 2. 首页
- 轮播图展示
- 功能菜单入口
- 组件演示入口

### 3. Antd Mobile 组件演示
- 开关（Switch）
- 步进器（Stepper）
- 滑块（Slider）
- 选择器（Picker）
- 日期选择（DatePicker）
- 对话框（Dialog）
- 消息提示（Toast）

### 4. Vant 组件演示
- 开关（Switch）
- 步进器（Stepper）
- 按钮（Button）
- 对话框（Dialog）
- 消息提示（Toast）

### 5. 状态管理
- Dva 集成
- 全局状态管理
- 支持异步 effects

### 6. 请求封装
- 统一请求拦截
- Token 自动注入
- 错误统一处理
- Toast 提示

## 快速开始

### 安装依赖

```bash
cd F:\code\mobile
yarn install
```

### 启动开发环境

```bash
yarn start
```

访问 http://localhost:8000

### 构建生产版本

```bash
yarn build
```

## 代理配置

在 `.umirc.ts` 中配置代理：

```typescript
proxy: {
  '/api': {
    target: 'http://your-api-server.com',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
},
```

## 目录规范

```
src/
├── pages/              # 页面组件
│   └── [pageName]/     # 页面目录
│       ├── index.tsx   # 页面组件
│       └── index.less  # 页面样式
├── models/             # Dva Models
├── services/           # API 服务
├── components/         # 公共组件
└── assets/             # 静态资源
```

## UI 组件库

### Antd Mobile (推荐)

适用于企业级应用，组件丰富，设计规范。

```tsx
import { Button, Toast } from 'antd-mobile';

<Button color="primary" onClick={() => Toast.show('Hello')}>
  点击
</Button>
```

### React Vant

适用于轻量级应用，组件简洁，性能优秀。

```tsx
import { Button, Toast } from 'react-vant';

<Button type="primary" onClick={() => Toast('Hello')}>
  点击
</Button>
```

## 状态管理

```typescript
// src/models/example.ts
export default {
  namespace: 'example',
  
  state: {
    list: [],
  },
  
  effects: {
    *fetchList({ payload }, { call, put }) {
      // const res = yield call(api.getList, payload);
      yield put({ type: 'setState', payload: { list: res.data } });
    },
  },
  
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
```

## 请求示例

```typescript
import { get, post } from '@/services/request';

// GET 请求
const data = await get('/api/list', { page: 1 });

// POST 请求
const result = await post('/api/login', { username, password });
```

## 浏览器支持

- Chrome >= 60
- Safari >= 12
- iOS Safari >= 12
- Android Browser >= 60

---

## 🤖 代码生成说明

本项目代码由 **OpenClaw AI 助手** 使用以下大模型生成：

| 项目 | 说明 |
|------|------|
| **AI 助手** | OpenClaw |
| **大模型** | qclaw/modelroute（智能路由模型） |
| **生成时间** | 2026-03-27 |
| **生成方式** | 对话式交互生成 |

### 生成过程

1. 用户发起「创建 H5 框架」请求
2. AI 分析需求，确定技术栈：Umi + React + Antd Mobile + Vant + Dva
3. AI 逐步生成项目文件：
   - 配置文件（.umirc.ts, package.json, tsconfig.json）
   - 布局组件（layouts）
   - 页面组件（pages）
   - 状态管理（models）
   - 请求封装（services）
4. 安装依赖并启动项目
5. 根据用户反馈修复问题（页面空白、样式重复等）

### 注意事项

- 代码由 AI 生成，可能存在优化空间
- 建议在实际项目中进行 Code Review
- 部分 API 接口需要根据实际后端进行调整

---

## License

MIT

---

*Powered by OpenClaw AI Assistant*

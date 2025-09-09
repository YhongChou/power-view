# Power View 数据可视化大屏

一个基于 React + TypeScript + Vite 构建的现代化数据可视化大屏应用，提供丰富的数据图表展示和实时监控功能。

## 功能特性

- **数据可视化大屏**：支持多种图表类型，包括饼图、柱状图、折线图、水球图等
- **响应式设计**：自适应不同屏幕尺寸，支持大屏展示
- **实时数据更新**：支持动态数据刷新和实时监控
- **现代化技术栈**：基于 React 19、TypeScript、Vite 等最新技术
- **组件化架构**：模块化设计，易于维护和扩展

## 技术栈

- **前端框架**：React 19.1.0
- **开发语言**：TypeScript 5.8.3
- **构建工具**：Vite 7.0.3
- **UI 组件库**：Ant Design 5.26.5
- **路由管理**：React Router DOM 7.6.3
- **图表库**：ECharts 5.6.0
- **样式预处理**：Less 4.3.0
- **动画库**：GSAP 3.13.0

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 项目结构

```
src/
├── api/                    # API 接口和模拟数据
│   ├── data.ts            # 图表数据定义
│   ├── index.ts           # API 入口
│   └── mock/              # Mock 数据
├── assets/                # 静态资源
│   ├── css/               # 全局样式
│   └── images/            # 图片资源
├── components/            # 公共组件
├── pages/                 # 页面组件
│   ├── bigScreen/         # 数据大屏页面
│   ├── home/              # 首页
│   └── layout/            # 布局组件
├── router/                # 路由配置
├── services/              # 服务层
├── stores/                # 状态管理
├── types/                 # 类型定义
└── utils/                 # 工具函数
```

## 主要功能模块

### 数据大屏

- **饼图展示**：支持多维度数据展示
- **柱状图**：数据对比分析
- **折线图**：趋势分析，支持多系列数据
- **水球图**：系统资源使用率监控
- **计数面板**：关键指标统计
- **异常监控**：实时异常状态展示

### 图表组件

项目提供了丰富的图表组件，包括：

- `Pie.tsx`：饼图组件
- `Bar.tsx`：柱状图组件
- `Line.tsx`：折线图组件
- `Ball.tsx`：水球图组件
- `Count.tsx`：计数面板组件
- `Error.tsx`：异常监控组件
- `Summary.tsx`：汇总信息组件

## 开发指南

### 代码规范

项目使用 ESLint 进行代码检查，支持以下规则：

- TypeScript 类型检查
- React Hooks 规范
- 未使用导入检测
- 代码格式化

### 样式规范

- 使用 Less 作为 CSS 预处理器
- 支持 CSS Modules
- 响应式设计原则

### 状态管理

使用 Redux Toolkit 进行状态管理，包含以下模块：

- `userSlice.ts`：用户状态
- `taskSlice.ts`：任务状态
- `statsSlice.ts`：统计数据
- `settingSlice.ts`：设置状态
- `pomodoroSlice.ts`：番茄钟状态

## 部署说明

### 构建配置

项目使用 Vite 进行构建，配置文件为 `vite.config.ts`，包含：

- React 插件配置
- Mock 服务配置
- 路径别名配置
- CSS 模块配置

### 环境变量

创建 `.env` 文件配置环境变量：

```bash
VITE_API_BASE_URL=your_api_base_url
VITE_APP_TITLE=Power View
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -am 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证，详情请参阅 [LICENSE](LICENSE) 文件。

## 更新日志

### v0.0.0

- 初始版本发布
- 基础数据大屏功能
- 多种图表组件支持
- 响应式布局设计

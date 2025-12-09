# fwk_console_v2

主机管理控制台 - 简洁的前端演示项目

## 功能特性

- ✅ 顶部导航栏 (60px高)
  - Logo: fwk_console
  - 4个快捷操作按钮：刷新、通知、FAQ、账户
- ✅ 左侧菜单导航 (220px宽)
  - 6个控制台部分：Home、TIR、LTS、Auth、MF、BPF
  - 紫色高亮活动菜单项
  - 3px左边框指示器
- ✅ 主内容区域
  - 28px内边距
  - 响应式页面切换
- ✅ 扁平设计风格
  - 紫色主题 (#6C5CE7)
  - 浅灰/白背景
  - 无阴影设计

## 技术栈

- **框架**: React 18.2+
- **UI库**: Ant Design 5.12+
- **路由**: React Router v6.20+
- **构建工具**: Vite 5.0+
- **语言**: TypeScript 5.3+

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:3000

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
src/
├── components/layout/
│   ├── ConsoleLayout.tsx    # 主布局容器
│   ├── TopNavBar.tsx        # 顶部导航栏
│   ├── SideMenu.tsx         # 左侧菜单
│   └── MainContent.tsx      # 主内容包装器
├── pages/sections/          # 6个控制台页面
│   ├── HomePage.tsx
│   ├── TIRPage.tsx
│   ├── LTSPage.tsx
│   ├── AuthPage.tsx
│   ├── MFPage.tsx
│   └── BPFPage.tsx
├── styles/
│   └── console-layout.css   # 全局样式和主题
├── App.tsx                  # 路由配置
└── main.tsx                 # 应用入口
\`\`\`

## 开发规范

本项目遵循 [项目宪法](./.specify/memory/constitution.md) 的以下原则：

1. **可运行性优先** - 确保项目始终可正常运行
2. **最小依赖** - 仅使用必要的依赖包
3. **无测试代码** - 快速原型，专注功能演示
4. **技术栈约束** - 严格使用 React + Ant Design + Vite

## 实现状态

所有26个开发任务已完成 ✅

- [X] Phase 1: 项目初始化 (1个任务)
- [X] Phase 2: 基础布局 (4个任务)
- [X] Phase 3: 路由导航 (9个任务)
- [X] Phase 4: 样式定制 (5个任务)
- [X] Phase 5: 交互优化 (7个任务)

详见 [tasks.md](./specs/001-console-layout/tasks.md)

## License

MIT

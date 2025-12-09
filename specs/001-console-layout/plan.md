# 实施计划：主机管理控制台布局

**分支**: `001-console-layout` | **日期**: 2025-12-09 | **规格**: [spec.md](./spec.md)

## 概述

创建简洁的主机管理控制台静态页面：顶部导航栏(90px高，logo+4按钮)、左侧菜单(275px宽，6菜单项)、主内容区(28px内边距)。扁平设计，浅灰/白背景，紫色(#6C5CE7)强调色。

## 技术上下文

**技术栈**: TypeScript 5.x, React 18+, Ant Design 5.x, Vite 5.x  
**类型**: Web前端SPA，静态原型，无后端  
**目标**: 页面加载<2s，交互<100ms，≥1024px屏幕  
**测试**: 不需要（宪法规定）

## 宪法检查

✅ **可运行性**: React+Ant Design标准组件  
✅ **最小依赖**: 仅用已有依赖  
✅ **测试策略**: 规格未要求，不生成  
✅ **技术栈**: React函数组件+Hooks, Ant Design, Vite

## 项目结构

```text
src/
├── components/layout/
│   ├── ConsoleLayout.tsx    # 主布局
│   ├── TopNavBar.tsx        # 顶部导航
│   ├── SideMenu.tsx         # 左侧菜单
│   └── MainContent.tsx      # 主内容
├── pages/sections/          # 6个页面占位
├── styles/console-layout.css
└── App.tsx
```

## Phase 0: 研究任务

**R1: Ant Design Layout** - Layout/Sider/Header嵌套，固定尺寸设置  
**R2: Menu样式定制** - active状态(紫背景+白字+3px左边框)  
**R3: React Router v6** - 6路由配置，菜单同步  
**R4: 扁平设计** - 颜色/阴影/圆角/间距规范

输出到 `research.md`

## Phase 1: 组件设计

### 核心组件

**ConsoleLayout** - 管理Layout结构，设置尺寸主题  
**TopNavBar** - Logo + 4操作按钮(refresh/notification/faq/account)  
**SideMenu** - 6菜单项，各带图标(主页/搜索/时钟/锁/邮件/控制台)，高亮active，处理导航  
**MainContent** - 内容区，28px内边距，占位符

### 路由

```
/      → Home (主页)        /tir → TIR (Lucene索引搜索)
/lts   → LTS (定时任务)      /auth → Auth (权限管理)
/mf    → MF (消息管理)       /bpf → BPF (批量任务执行)
```

### 样式规格

**颜色**: 主色#6C5CE7，背景#F5F5F5/#FFF，边框#E8E8E8  
**尺寸**: Header 90px, Sider 275px, Padding 28px, MenuItem 60px, Logo 30px, Icons 24px  
**字体**: system-ui, -apple-system, sans-serif

## Phase 2: 任务规划 (12h)

**阶段1 基础布局(4h)**: ConsoleLayout + TopNavBar + SideMenu + MainContent  
**阶段2 样式定制(3h)**: active样式 + 悬停状态 + 扁平设计 + 尺寸调整  
**阶段3 路由导航(3h)**: React Router + 6页面 + 同步状态 + 占位符  
**阶段4 交互优化(2h)**: 按钮功能 + 性能验证(<100ms, <2s)

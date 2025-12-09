# 实施计划：TIR侧边栏导航及子页面

**分支**: `002-tir-sidebar-navigation` | **日期**: 2025-12-09 | **规格**: [spec.md](./spec.md)

## 概述

实现TIR侧边栏的可展开导航菜单，包含5个子页面。点击TIR自动跳转到Index Management，展开子页面菜单，隐藏其他区域菜单项，仅保留Home按钮。使用React Router嵌套路由和Ant Design Menu组件实现。

## 技术上下文

**语言/版本**: TypeScript 5.x  
**主要依赖**: React 18+, Ant Design 5.x, Vite 5.x, React Router (已有)  
**存储**: 浏览器URL状态 + React状态管理  
**测试**: 不需要（宪法规定）  
**目标平台**: 现代浏览器  
**项目类型**: Web应用  
**性能目标**: 导航响应<300ms，页面加载<1s  
**约束**: 不引入新依赖，使用现有技术栈  
**规模**: 5个子页面，单一父级菜单

## 宪法检查

**门禁：Phase 0研究前必须通过，Phase 1设计后重新检查**

### ✅ I. 可运行性优先
- 遵守：增量实现，每个阶段都保持项目可运行
- 验证：每次提交前运行`npm run dev`确认无错误

### ✅ II. 最小依赖原则
- 遵守：完全使用现有依赖（React Router已存在，Ant Design Menu已有）
- 无新依赖引入

### ✅ III. 测试策略
- 遵守：不生成测试代码

### ✅ IV. 技术栈约束
- 遵守：React函数组件 + Hooks, Ant Design Menu组件, Vite构建
- 使用Ant Design的selectedKeys实现高亮（符合澄清决定）

**Phase 1后重新检查**: [待Phase 1完成后填写]

## 项目结构

### 文档（本功能）
```
specs/002-tir-sidebar-navigation/
├── spec.md              # 功能规格（已完成）
├── plan.md              # 本文件
├── research.md          # Phase 0输出（无需，技术方案明确）
├── data-model.md        # Phase 1输出（无需，无复杂数据）
├── quickstart.md        # Phase 1输出（待生成）
└── contracts/           # Phase 1输出（无需，无API）
```

### 源代码
```
src/
├── pages/sections/
│   └── TIRPage/
│       ├── IndexManagementPage.tsx      # 新建
│       ├── HealthMonitorPage.tsx        # 新建
│       ├── RemoteServiceTriggerPage.tsx # 新建
│       ├── UserBehaviorAnalysisPage.tsx # 新建
│       └── TIRDomainManagementPage.tsx  # 新建
├── components/layout/
│   └── SideMenu.tsx                      # 修改（添加TIR子菜单逻辑）
└── App.tsx                               # 修改（添加TIR子路由）
```

## Phase 0: 大纲与研究

**跳过理由**: 技术方案明确（React Router嵌套路由 + Ant Design Menu），无需额外研究。

**决策记录**:
- 路由方案：使用React Router的嵌套路由 `/tir/:subpage`
- 菜单方案：Ant Design Menu的SubMenu组件 + selectedKeys控制高亮
- 状态管理：useLocation获取当前路由，控制菜单展开/折叠
- 菜单显示控制：根据当前路由动态渲染菜单项

## Phase 1: 设计与契约

### 数据模型

**跳过理由**: 无需复杂数据结构，仅有静态配置数据。

**配置数据**:
```typescript
const TIR_SUB_PAGES = [
  { key: 'health-monitor', label: 'Health Monitor', path: '/tir/health-monitor' },
  { key: 'index-management', label: 'Index Management', path: '/tir/index-management' },
  { key: 'remote-service-trigger', label: 'Remote Service Trigger', path: '/tir/remote-service-trigger' },
  { key: 'user-behavior-analysis', label: 'User Behavior Analysis', path: '/tir/user-behavior-analysis' },
  { key: 'tir-domain-management', label: 'TIR Domain Management', path: '/tir/tir-domain-management' }
];
```

### 路由设计

```typescript
// App.tsx 路由配置
<Route path="/tir" element={<Navigate to="/tir/index-management" replace />} />
<Route path="/tir/:subpage" element={<TIRSubPageLayout />} />
```

### 组件设计

**1. SideMenu.tsx 修改**
- 添加TIR SubMenu，包含5个子菜单项
- 根据useLocation判断当前路由，设置selectedKeys
- 根据当前路由判断是否隐藏其他区域菜单（LTS/Auth/MF/BPF）
- Home菜单项始终可见
- 首页时TIR菜单折叠，子页面时展开

**2. TIR子页面组件（5个）**
- 布局一致：显示标题 + 简短说明文字
- 使用Ant Design Typography组件
- 标题使用各自页面名称


## 路由结构
- `/` - 首页（TIR折叠，所有区域可见）
- `/tir` - 自动重定向到 `/tir/index-management`
- `/tir/index-management` - Index Management页面
- `/tir/health-monitor` - Health Monitor页面
- `/tir/remote-service-trigger` - Remote Service Trigger页面
- `/tir/user-behavior-analysis` - User Behavior Analysis页面
- `/tir/tir-domain-management` - TIR Domain Management页面

### 契约

**跳过理由**: 无API调用，纯前端导航功能。

## Phase 2: 任务分解

**说明**: 本节由 `/speckit.tasks` 命令生成，此处仅列出高层次任务概览。

### 高层次任务

1. **创建TIR子页面组件**（5个文件）
   - 实现统一布局：标题 + 说明文字
   - 使用Ant Design Typography组件

2. **修改路由配置**（App.tsx）
   - 添加TIR重定向规则
   - 配置TIR子页面路由

3. **修改侧边栏菜单**（SideMenu.tsx）
   - 实现TIR SubMenu及5个子菜单项
   - 实现菜单展开/折叠逻辑
   - 实现高亮逻辑（selectedKeys）
   - 实现其他区域菜单显示/隐藏逻辑
   - 确保Home按钮始终可见

4. **验证功能**
   - 人工验证

## 实施注意事项

### 关键决策
1. **默认子页面**: Index Management（FR-003）
2. **菜单高亮**: 使用Ant Design Menu的selectedKeys（澄清决定）
3. **Home按钮**: 始终可见，不受TIR状态影响（澄清决定）
4. **子页面内容**: 标题 + 说明文字（澄清决定）

### 风险缓解
1. **路由冲突**: 确保TIR路由与现有路由不冲突
2. **状态同步**: useLocation确保路由和菜单状态同步
3. **性能**: 避免不必要的重渲染，使用React.memo优化

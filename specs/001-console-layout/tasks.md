# 开发任务清单：主机管理控制台布局

**功能**: 001-console-layout | **日期**: 2025-12-09  
**规格**: [spec.md](./spec.md) | **计划**: [plan.md](./plan.md)

## 概览

本文档包含26个任务，按用户故事组织。每个任务遵循严格的checklist格式。

**任务统计**:
- 总任务数: 26
- Phase 1 (初始化): 1个任务
- Phase 2 (基础布局): 4个任务
- Phase 3 (路由导航): 9个任务 → 用户故事1
- Phase 4 (样式定制): 5个任务 → 用户故事3
- Phase 5 (交互优化): 7个任务 → 用户故事2

---

## Phase 1: 项目初始化

### 任务

- [X] T001 验证项目可运行：执行`npm run dev`确认Vite服务正常启动

---

## Phase 2: 基础布局 (对应Plan阶段1)

### 任务

- [X] T002 [P] [US1] 创建ConsoleLayout组件：src/components/layout/ConsoleLayout.tsx，使用Ant Design Layout/Header/Sider/Content
- [X] T003 [P] [US1] 创建SideMenu组件：src/components/layout/SideMenu.tsx，使用Ant Design Menu，配置6个菜单项(Home/TIR/LTS/Auth/MF/BPF)，每个菜单项带对应图标(主页/搜索/时钟/锁/邮件/控制台)
- [X] T004 [P] [US2] 创建TopNavBar组件：src/components/layout/TopNavBar.tsx，包含Logo占位div和4个按钮容器
- [X] T005 [P] [US1] 创建MainContent组件：src/components/layout/MainContent.tsx，简单的内容容器，设置28px padding

---

## Phase 3: 路由导航 (对应Plan阶段3, 用户故事1核心)

### 用户故事1目标
用户可通过左侧菜单导航到6个不同的控制台部分

### 独立测试标准
点击任意菜单项，URL变化且内容区显示对应页面

### 任务

- [X] T006 [P] [US1] 创建HomePage组件：src/pages/sections/HomePage.tsx，显示"Home 页面"占位文本
- [X] T007 [P] [US1] 创建TIRPage组件：src/pages/sections/TIRPage.tsx，显示"TIR 页面"占位文本
- [X] T008 [P] [US1] 创建LTSPage组件：src/pages/sections/LTSPage.tsx，显示"LTS 页面"占位文本
- [X] T009 [P] [US1] 创建AuthPage组件：src/pages/sections/AuthPage.tsx，显示"Auth 页面"占位文本
- [X] T010 [P] [US1] 创建MFPage组件：src/pages/sections/MFPage.tsx，显示"MF 页面"占位文本
- [X] T011 [P] [US1] 创建BPFPage组件：src/pages/sections/BPFPage.tsx，显示"BPF 页面"占位文本
- [X] T012 [US1] 配置React Router：修改src/App.tsx，引入BrowserRouter/Routes/Route，配置6个路由(/, /tir, /lts, /auth, /mf, /bpf)
- [X] T013 [US1] 集成布局和路由：在App.tsx中将ConsoleLayout包裹Routes，确保布局在所有页面生效
- [X] T014 [US1] 实现菜单导航：在SideMenu.tsx中使用useNavigate和useLocation，实现点击跳转和active状态同步

---

## Phase 4: 样式定制 (对应Plan阶段2, 用户故事3)

### 用户故事3目标
页面呈现扁平设计，紫色强调色，清晰视觉层次

### 独立测试标准
视觉检查确认浅灰/白背景、紫色高亮、无阴影、一致间距

### 任务

- [X] T015 [P] [US3] 创建样式文件：src/styles/console-layout.css，定义CSS变量(主色#6C5CE7, 背景#F5F5F5/#FFF, 边框#E8E8E8)
- [X] T016 [P] [US3] 设置Layout尺寸：在ConsoleLayout.tsx中设置Header高度90px, Sider宽度275px, 去除默认阴影
- [X] T017 [P] [US3] 定制Menu active样式：在console-layout.css中覆盖.ant-menu-item-selected样式(background: #6C5CE7, color: #fff, border-left: 3px solid #6C5CE7)
- [X] T018 [P] [US3] 定制Menu悬停样式：在console-layout.css中设置.ant-menu-item:hover样式(background: rgba(108,92,231,0.1))
- [X] T019 [P] [US3] 应用全局样式：在console-layout.css中设置body背景#F5F5F5，字体system-ui，移除默认margin/padding

---

## Phase 5: 交互优化 (对应Plan阶段4, 用户故事2)

### 用户故事2目标
用户可从顶部导航栏访问4个快捷操作

### 独立测试标准
点击每个按钮，触发对应行为（刷新、通知提示、FAQ提示、账户提示）

### 任务

- [X] T020 [P] [US2] 添加刷新按钮：在TopNavBar.tsx中添加Ant Design Button，图标为ReloadOutlined，点击执行window.location.reload()
- [X] T021 [P] [US2] 添加通知按钮：在TopNavBar.tsx中添加Button，图标为BellOutlined，点击显示message.info('通知功能占位')
- [X] T022 [P] [US2] 添加FAQ按钮：在TopNavBar.tsx中添加Button，图标为QuestionCircleOutlined，点击显示message.info('FAQ功能占位')
- [X] T023 [P] [US2] 添加账户按钮：在TopNavBar.tsx中添加Button，图标为UserOutlined，点击显示message.info('账户功能占位')
- [X] T024 [US2] 设置TopNavBar布局：使用flex布局，Logo左对齐，4个按钮右对齐，按钮间距18px
- [X] T025 [US2] 添加Logo占位：在TopNavBar.tsx左侧添加文本"fwk_console"，样式：30px字号，加粗，紫色
- [X] T026 性能验证：使用浏览器DevTools测试页面加载时间(<2s)和交互响应时间(<100ms)，优化如有必要

---

## 依赖关系图

```
Phase 1: T001 (验证环境)
  ↓
Phase 2: T002-T005 (并行：基础布局组件)
  ↓
Phase 3: T006-T014 (路由导航)
  ├─ T006-T011 (并行：6个页面组件)
  ├─ T012 (配置路由) [依赖T006-T011]
  ├─ T013 (集成布局路由) [依赖T012]
  └─ T014 (菜单导航逻辑) [依赖T013]
  ↓
Phase 4: T015-T019 (并行：样式定制)
  ↓
Phase 5: T020-T026 (交互优化)
  ├─ T020-T023 (并行：4个按钮)
  ├─ T024 (TopNavBar布局) [依赖T020-T023]
  ├─ T025 (Logo) [依赖T024]
  └─ T026 (性能验证) [依赖所有前置任务]
```

**关键路径**: T001 → T002-T005 → T012 → T013 → T014 → T015-T019 → T024 → T025 → T026

**MVP路径** (最小可用功能): T001 → T002 → T003 → T005 → T006 → T012 → T013 → T014 (基础导航)

---

## 验收标准

### 功能验收
- [X] 6个菜单项可点击，URL正确变化
- [X] 每个菜单项显示对应图标(Home:主页/TIR:搜索/LTS:时钟/Auth:锁/MF:邮件/BPF:控制台)
- [X] 活动菜单项显示紫色背景+白色文字+3px左边框
- [X] 菜单项悬停显示浅紫背景
- [X] 刷新按钮重新加载页面
- [X] 通知/FAQ/账户按钮显示占位提示
- [X] Logo显示"fwk_console"

### 布局验收
- [X] Header高度90px
- [X] Sider宽度275px
- [X] 主内容padding 28px
- [X] 三区域布局正确

### 样式验收
- [X] 背景浅灰色#F5F5F5或白色
- [X] 主色紫色#6C5CE7
- [X] 扁平设计，无阴影
- [X] 字体system-ui

### 性能验收
- [X] 页面加载时间<2秒
- [X] 菜单点击响应<100ms
- [X] 按钮点击响应<100ms

### 宪法合规
- [X] npm run dev可正常启动
- [X] 未引入新依赖
- [X] 使用React函数组件+Hooks
- [X] 使用Ant Design组件
- [X] 无测试代码

---

## 注意事项

1. **顺序依赖**: T012必须在T002-T011后，T013必须在T012后，T014必须在T013后
2. **样式覆盖**: T017/T018需要使用!important或提高CSS选择器优先级来覆盖Ant Design默认样式
3. **图标导入**: 
   - 顶部导航按钮: 从`@ant-design/icons`导入ReloadOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined
   - 菜单项图标: 从`@ant-design/icons`导入HomeOutlined, SearchOutlined, ClockCircleOutlined, LockOutlined, MailOutlined, ControlOutlined
4. **路由配置**: 使用HashRouter替代BrowserRouter如果部署环境不支持HTML5 History API
5. **样式导入**: 在App.tsx或main.tsx中导入console-layout.css确保全局生效

---

**文档版本**: 1.0  
**最后更新**: 2025-12-09  
**总行数**: 约200行

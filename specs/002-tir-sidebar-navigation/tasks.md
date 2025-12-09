# 任务清单：TIR侧边栏导航及子页面

**功能**: TIR侧边栏导航及子页面  
**分支**: `002-tir-sidebar-navigation`  
**日期**: 2025-12-09

## 总览

**总任务数**: 19  
**用户故事**: 3个 (P1: 2个, P2: 1个)  
**并行机会**: T005-T009可并行（5个子页面组件创建）

## 阶段1：设置与基础 (Setup)

- [X] T001 确认项目可运行状态，运行`npm run dev`验证无错误

## 阶段2：基础组件 (Foundation)

### 用户故事1: TIR点击自动跳转 (P1)

- [X] T002 在src/pages/sections/下创建TIRPage目录
- [X] T003 [P] [US1] 创建src/pages/sections/TIRPage/IndexManagementPage.tsx，包含Typography.Title和Typography.Paragraph
- [X] T004 [US1] 在App.tsx添加路由：`<Route path="/tir" element={<Navigate to="/tir/index-management" replace />} />`
- [X] T005 [P] [US1] 创建HealthMonitorPage.tsx（同T003结构）
- [X] T006 [P] [US1] 创建RemoteServiceTriggerPage.tsx（同T003结构）
- [X] T007 [P] [US1] 创建UserBehaviorAnalysisPage.tsx（同T003结构）
- [X] T008 [P] [US1] 创建TIRDomainManagementPage.tsx（同T003结构）
- [X] T009 [US1] 在App.tsx添加5个子页面路由：`<Route path="/tir/:subpage" element={<TIRSubPageLayout />} />`
- [X] T010 [US1] 在SideMenu.tsx添加TIR SubMenu组件，包含5个MenuItem对应各子页面

### 用户故事2: 子页面间切换导航 (P1)

- [X] T011 [US2] 在SideMenu.tsx使用useLocation获取当前路由
- [X] T012 [US2] 实现selectedKeys逻辑：根据当前路径设置Menu的selectedKeys属性
- [X] T013 [US2] 实现菜单项高亮：当路径匹配时高亮对应MenuItem

### 用户故事3: 首页菜单折叠状态 (P2)

- [X] T014 [US3] 实现菜单展开/折叠逻辑：首页时TIR折叠，子页面时展开
- [X] T015 [US3] 实现其他区域菜单显示/隐藏：路径包含`/tir/`时隐藏LTS/Auth/MF/BPF
- [X] T016 [US3] 确保Home按钮始终可见，不受TIR状态影响
- [X] T017 [US3] 实现点击Home按钮返回首页功能

## 阶段3：验证与完善 (Polish)

- [X] T018 验证所有导航路径：首页→TIR，子页面互相切换，返回首页
- [X] T019 验证浏览器前进/后退按钮，直接URL访问，确认菜单状态和高亮正确

---

## 任务详情

### T001 - 确认项目可运行状态
**目标**: 验证开发环境正常  
**操作**: 运行`npm run dev`，访问http://localhost:5173，确认应用正常显示  
**验收**: 控制台无错误，页面正常加载

---

### T002 - 创建TIRPage目录
**目标**: 为TIR子页面组件创建存放目录  
**文件**: src/pages/sections/TIRPage/  
**操作**: 创建目录结构  
**验收**: 目录创建成功

---

### T003 - 创建IndexManagementPage.tsx
**目标**: 创建Index Management子页面组件  
**文件**: src/pages/sections/TIRPage/IndexManagementPage.tsx  
**代码**:
```tsx
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function IndexManagementPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Index Management</Title>
      <Paragraph>
        索引管理功能提供对系统索引的创建、维护和监控能力。
      </Paragraph>
    </div>
  );
}
```
**验收**: 文件创建成功，导出组件

---

### T004 - 添加TIR重定向路由
**目标**: 点击TIR自动跳转到Index Management  
**文件**: src/App.tsx  
**代码**: 在Routes中添加
```tsx
<Route path="/tir" element={<Navigate to="/tir/index-management" replace />} />
```
**验收**: 访问/tir自动重定向到/tir/index-management

---

### T005 - 创建HealthMonitorPage.tsx
**文件**: src/pages/sections/TIRPage/HealthMonitorPage.tsx  
**代码**: 同T003，标题改为"Health Monitor"，说明改为"健康监控功能提供系统运行状态的实时监测和告警。"

---

### T006 - 创建RemoteServiceTriggerPage.tsx
**文件**: src/pages/sections/TIRPage/RemoteServiceTriggerPage.tsx  
**代码**: 同T003，标题改为"Remote Service Trigger"，说明改为"远程服务触发器提供对外部服务的调用和管理能力。"

---

### T007 - 创建UserBehaviorAnalysisPage.tsx
**文件**: src/pages/sections/TIRPage/UserBehaviorAnalysisPage.tsx  
**代码**: 同T003，标题改为"User Behavior Analysis"，说明改为"用户行为分析功能提供用户操作数据的统计和分析能力。"

---

### T008 - 创建TIRDomainManagementPage.tsx
**文件**: src/pages/sections/TIRPage/TIRDomainManagementPage.tsx  
**代码**: 同T003，标题改为"TIR Domain Management"，说明改为"TIR域管理功能提供对TIR相关资源的配置和管理能力。"

---

### T009 - 添加TIR子页面路由
**目标**: 配置5个子页面的路由  
**文件**: src/App.tsx  
**代码**: 
```tsx
<Route path="/tir/index-management" element={<IndexManagementPage />} />
<Route path="/tir/health-monitor" element={<HealthMonitorPage />} />
<Route path="/tir/remote-service-trigger" element={<RemoteServiceTriggerPage />} />
<Route path="/tir/user-behavior-analysis" element={<UserBehaviorAnalysisPage />} />
<Route path="/tir/tir-domain-management" element={<TIRDomainManagementPage />} />
```
**验收**: 各路径可访问对应页面

---

### T010 - 添加TIR SubMenu
**目标**: 在侧边栏添加TIR子菜单  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
<SubMenu key="tir" icon={<AppstoreOutlined />} title="TIR">
  <Menu.Item key="/tir/index-management">Index Management</Menu.Item>
  <Menu.Item key="/tir/health-monitor">Health Monitor</Menu.Item>
  <Menu.Item key="/tir/remote-service-trigger">Remote Service Trigger</Menu.Item>
  <Menu.Item key="/tir/user-behavior-analysis">User Behavior Analysis</Menu.Item>
  <Menu.Item key="/tir/tir-domain-management">TIR Domain Management</Menu.Item>
</SubMenu>
```
**验收**: 侧边栏显示TIR菜单及5个子项

---

### T011 - 获取当前路由
**目标**: 使用useLocation获取当前URL路径  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
const currentPath = location.pathname;
```
**验收**: 可获取当前路径

---

### T012 - 实现selectedKeys逻辑
**目标**: 根据当前路径设置Menu高亮  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
const selectedKeys = [currentPath];

<Menu selectedKeys={selectedKeys} ... >
```
**验收**: Menu组件接收selectedKeys属性

---

### T013 - 实现菜单项高亮
**目标**: 当前页面对应的菜单项高亮显示  
**文件**: src/components/layout/SideMenu.tsx  
**验收**: 导航到各子页面时，对应MenuItem高亮

---

### T014 - 实现展开/折叠逻辑
**目标**: 首页折叠TIR，子页面展开TIR  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
const openKeys = currentPath.startsWith('/tir/') ? ['tir'] : [];

<Menu openKeys={openKeys} mode="inline" ... >
```
**验收**: 首页TIR折叠，TIR子页面时展开

---

### T015 - 隐藏其他区域菜单
**目标**: TIR子页面时隐藏LTS/Auth/MF/BPF  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
const isTIRPage = currentPath.startsWith('/tir/');
const showOtherSections = !isTIRPage;

{showOtherSections && <Menu.Item key="lts">LTS</Menu.Item>}
{showOtherSections && <Menu.Item key="auth">Auth</Menu.Item>}
{showOtherSections && <Menu.Item key="mf">MF</Menu.Item>}
{showOtherSections && <Menu.Item key="bpf">BPF</Menu.Item>}
```
**验收**: TIR子页面时其他区域菜单隐藏

---

### T016 - 确保Home按钮始终可见
**目标**: Home按钮不受TIR状态影响  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
<Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
{/* Home始终显示，不受showOtherSections控制 */}
```
**验收**: 任何页面Home按钮都可见

---

### T017 - 实现Home按钮返回功能
**目标**: 点击Home返回首页  
**文件**: src/components/layout/SideMenu.tsx  
**代码**:
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<Menu.Item key="/" icon={<HomeOutlined />} onClick={() => navigate('/')}>
  Home
</Menu.Item>
```
**验收**: 点击Home跳转到首页

---

### T018 - 验证导航路径
**目标**: 测试所有导航场景  
**操作**:
1. 首页点击TIR → 确认跳转Index Management，菜单展开，其他区域隐藏
2. 点击各子页面 → 确认导航成功，高亮正确
3. 点击Home → 确认返回首页，TIR折叠，所有区域可见  
**验收**: 所有场景通过

---

### T019 - 验证浏览器导航和URL访问
**目标**: 测试边界情况  
**操作**:
1. 直接访问`/tir/health-monitor` → 菜单自动展开并高亮
2. 使用浏览器前进/后退按钮 → 菜单状态正确更新
3. 快速点击切换子页面 → 无视觉故障，响应流畅  
**验收**: 所有场景通过，性能满足<300ms

---

## 依赖关系

- T002 → T003-T008（目录创建后才能创建组件）
- T003-T008 → T009（组件创建后才能配置路由）
- T009 → T010（路由配置后才能添加菜单）
- T010 → T011-T013（菜单创建后才能实现高亮）
- T013 → T014-T017（高亮功能后实现折叠和隐藏）
- T017 → T018-T019（所有功能完成后验证）

## 实施策略

1. **MVP优先**: 先完成T001-T004，实现基本的TIR跳转功能
2. **增量交付**: 完成T005-T009后可演示5个子页面
3. **完整功能**: T010-T017实现全部导航和交互
4. **质量保证**: T018-T019全面验证
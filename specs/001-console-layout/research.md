# 技术研究：主机管理控制台布局

**功能**: 001-console-layout | **日期**: 2025-12-09  
**目的**: Phase 0 - 解决技术不确定性，为Phase 1设计提供依据

## 研究任务总结

本文档整合了4个研究任务的发现，所有NEEDS CLARIFICATION已解决。

---

## R1: Ant Design Layout组件最佳实践

### 决策
使用 Ant Design 的 `<Layout>`, `<Layout.Header>`, `<Layout.Sider>`, `<Layout.Content>` 组件进行嵌套布局。

### 理由
- Ant Design Layout组件专为管理后台设计，提供开箱即用的布局结构
- 支持固定尺寸设置（通过style属性或CSS）
- 内置响应式支持和折叠功能
- 语义化HTML结构，易于维护

### 实现方案

**基础结构**:
```tsx
<Layout style={{ minHeight: '100vh' }}>
  <Layout.Header style={{ height: '60px', padding: 0 }}>
    {/* 顶部导航栏 */}
  </Layout.Header>
  <Layout>
    <Layout.Sider width={220} style={{ background: '#fff' }}>
      {/* 左侧菜单 */}
    </Layout.Sider>
    <Layout.Content style={{ padding: '28px' }}>
      {/* 主内容区域 */}
    </Layout.Content>
  </Layout>
</Layout>
```

**固定尺寸设置**:
- Header高度: 通过 `style={{ height: '60px' }}` 设置
- Sider宽度: 通过 `width={220}` prop设置
- Content内边距: 通过 `style={{ padding: '28px' }}` 设置

**替代方案**: 使用原生CSS Grid或Flexbox - 被拒绝，因为需要更多自定义代码且失去Ant Design主题一致性

---

## R2: Ant Design Menu组件样式定制

### 决策
使用Ant Design Menu组件的 `theme` 和自定义CSS类覆盖active状态样式。

### 理由
- Menu组件提供 `selectedKeys` prop用于控制active状态
- 支持通过CSS变量和自定义类覆盖默认样式
- 可以通过 `itemBg`, `itemActiveBg`, `itemSelectedBg` 等token定制颜色

### 实现方案

**Menu配置**:
```tsx
<Menu
  mode="inline"
  selectedKeys={[activeKey]}
  onSelect={({ key }) => handleSelect(key)}
  style={{ borderRight: 0 }}
  theme="light"
  items={menuItems}
/>
```

**样式覆盖** (CSS):
```css
/* 活动菜单项样式 */
.ant-menu-item-selected {
  background-color: #6C5CE7 !important;
  color: #ffffff !important;
  border-left: 3px solid #6C5CE7 !important;
}

/* 悬停状态 */
.ant-menu-item:hover {
  background-color: rgba(108, 92, 231, 0.1);
}
```

**或使用ConfigProvider主题定制**:
```tsx
<ConfigProvider
  theme={{
    components: {
      Menu: {
        itemSelectedBg: '#6C5CE7',
        itemSelectedColor: '#ffffff',
      },
    },
  }}
>
  {/* Menu组件 */}
</ConfigProvider>
```

**替代方案**: 完全自定义菜单组件 - 被拒绝，违反最小依赖原则，且失去Menu组件的键盘导航等可访问性特性

---

## R3: React Router路由配置

### 决策
使用 React Router v6 的 `<BrowserRouter>`, `<Routes>`, `<Route>` 进行声明式路由配置。

### 理由
- React Router v6是React生态系统的标准路由解决方案
- 声明式API易于理解和维护
- 支持嵌套路由和懒加载
- 与Ant Design Menu组件集成良好

### 实现方案

**路由配置**:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ConsoleLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tir" element={<TIRPage />} />
          <Route path="/lts" element={<LTSPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/mf" element={<MFPage />} />
          <Route path="/bpf" element={<BPFPage />} />
        </Routes>
      </ConsoleLayout>
    </BrowserRouter>
  );
}
```

**菜单与路由同步**:
```tsx
import { useNavigate, useLocation } from 'react-router-dom';

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { key: '/', label: 'Home', path: '/' },
    { key: '/tir', label: 'TIR', path: '/tir' },
    // ... 其他菜单项
  ];
  
  return (
    <Menu
      selectedKeys={[location.pathname]}
      onSelect={({ key }) => navigate(key)}
      items={menuItems}
    />
  );
}
```

**URL结构设计**:
- 扁平路由结构，无嵌套
- 使用小写路径，与菜单key保持一致
- 根路径 `/` 对应 Home 页面

**替代方案**: Hash路由 (#/home) - 被拒绝，因为BrowserRouter提供更清晰的URL且利于SEO（虽然是静态原型）

---

## R4: 扁平设计样式指南

### 决策
遵循现代扁平设计原则：无渐变、无阴影（或极浅阴影）、纯色填充、清晰边界。

### 理由
- 扁平设计符合规格要求
- 与Ant Design 5.x的默认风格一致
- 减少视觉噪音，提升信息可读性
- 加载性能更好（少量CSS）

### 样式规范

**颜色方案**:
- 主色: `#6C5CE7` (紫色) - 用于active状态、主按钮
- 背景: `#F5F5F5` (浅灰) 或 `#FFFFFF` (白色)
- 文字: `#000000E0` (85%不透明度黑色) 或 `#FFFFFF` (白色，在深色背景上)
- 边框: `#E8E8E8` (浅灰)
- 悬停: `rgba(108, 92, 231, 0.1)` (10%不透明度紫色)

**阴影使用**:
- 避免使用box-shadow，除非需要轻微层次感
- 如需使用，仅用极浅阴影: `box-shadow: 0 1px 2px rgba(0,0,0,0.05)`

**圆角规范**:
- 统一使用小圆角: `border-radius: 4px`
- 按钮圆角与Ant Design默认保持一致

**间距标准**:
- 使用8px网格系统: 8, 16, 24, 32, 48, 64
- 本项目采用28px内边距（符合24-32px规格）

**字体**:
- 系统默认字体栈: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- 不引入自定义字体，保持轻量

**替代方案**: Material Design 3 风格 - 被拒绝，因为规格明确要求扁平设计，Material Design包含阴影和深度概念

---

## 总结

所有研究任务已完成，关键决策：

1. **布局框架**: Ant Design Layout组件 (嵌套结构)
2. **菜单样式**: Menu组件 + CSS覆盖active样式
3. **路由方案**: React Router v6 BrowserRouter
4. **设计风格**: 扁平设计 + 8px网格 + 紫色强调色

**未解决问题**: 无

**下一步**: 进入Phase 1设计与契约阶段

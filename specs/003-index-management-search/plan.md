# 实施计划：TIR Index Management 搜索页面

**功能分支**: `003-index-management-search`  
**创建日期**: 2025-12-09  
**规格文档**: [spec.md](./spec.md)

## 概述

实现一个功能完整的索引搜索页面，用户通过下拉菜单选择Index Store和Sub Index，以及输入Resource ID来搜索索引数据。搜索结果以表格形式展示ID、TYPE、CONTENT、METADATA四列信息，支持分页浏览（每页10条）。整体采用灰白色背景配合紫色(#6C5CE7)强调色的现代扁平设计风格。初期使用本地模拟数据，无需后端API依赖。

## 技术上下文

**开发语言**: TypeScript 5.3.3  
**核心依赖**: React 18.2.0, Ant Design 5.12.0, React Router DOM 6.20.0, Vite 5.0.8  
**状态管理**: React Hooks (useState, useEffect)  
**数据存储**: 本地模拟数据（mockData.ts）  
**测试策略**: 不需要（遵循宪法规定）  
**目标平台**: 现代浏览器（Chrome/Edge/Firefox最新两个版本）  
**项目类型**: Web前端单页应用  
**性能目标**: 搜索响应<2秒，分页切换<500ms，交互反馈<100ms  
**约束条件**: 无新npm依赖，必须使用Ant Design组件，遵循现有样式规范  
**规模范围**: 单个功能页面，约7个新文件，2个文件修改

### 现有项目结构

```
src/
├── components/layout/     # 布局组件（复用）
├── pages/sections/        # 功能页面
│   └── TIRPage/          # TIR模块子页面（新增）
└── styles/               # 样式文件
```

## Constitution Check

*验证点：Phase 0前必须通过，Phase 1设计后重新检查*

### I. 可运行性优先 ✅

**遵守情况**: 所有实现基于现有技术栈，不引入破坏性变更  
**验证点**: 每个开发阶段完成后验证页面可正常访问和交互  
**风险控制**: 使用模拟数据确保功能独立可运行，不依赖后端API

### II. 最小依赖原则 ✅

**新增依赖**: 无  
**理由**: 所有功能均可通过现有依赖实现
- 表格和表单 → Ant Design Table/Select/Input (已有)
- 路由 → React Router DOM (已有)
- 状态管理 → React Hooks (已有)
- 样式 → CSS Modules (已有)

### III. 测试策略 ✅

**测试代码**: 不生成测试文件  
**验证方式**: 通过手动测试验收场景  
**理由**: 规格未要求测试，作为演示项目优先功能实现

### IV. 技术栈约束 ✅

- **React**: 使用函数组件和Hooks ✅
- **Ant Design**: 所有UI组件来自Ant Design ✅
- **Vite**: 无需修改构建配置 ✅
- **TypeScript**: 所有新文件使用.tsx扩展名 ✅

**合规性结论**: 本实施计划完全符合项目宪法要求，无违规项。

## 数据模型设计

### 核心实体

#### 1. IndexRecord (索引记录)

```typescript
interface IndexRecord {
  id: string;              // 唯一标识符，支持字母数字及特殊字符
  type: string;            // 索引类型
  content: string;         // 索引内容
  metadata: string;        // 元数据信息
}
```

#### 2. SearchCriteria (搜索条件)

```typescript
interface SearchCriteria {
  indexStore?: string;     // 索引存储位置
  subIndex?: string;       // 子索引名称
  resourceId?: string;     // 资源标识符
}
```

**验证规则**: 至少需要`indexStore`或`resourceId`之一

#### 3. PaginationInfo (分页信息)

```typescript
interface PaginationInfo {
  current: number;         // 当前页码
  pageSize: number;        // 每页10条（固定）
  total: number;           // 总记录数
}
```

#### 4. DropdownOption (下拉选项)

```typescript
interface DropdownOption {
  value: string;           // 选项值
  label: string;           // 显示文本
}
```

### 模拟数据结构

```typescript
// Index Store选项（3个主要存储）
const MOCK_INDEX_STORES: DropdownOption[] = [
  { value: 'store-main', label: '主索引存储' },
  { value: 'store-backup', label: '备份索引存储' },
  { value: 'store-test', label: '测试索引存储' }
];

// Sub Index选项（层级关系映射）
const MOCK_SUB_INDEXES: Record<string, DropdownOption[]> = {
  'store-main': [
    { value: 'sub-user', label: '用户索引' },
    { value: 'sub-document', label: '文档索引' },
    // ... 更多子索引（建议每个Store 3-4个）
  ],
  'store-backup': [
    { value: 'sub-user-backup', label: '用户备份索引' },
    // ... 更多备份子索引
  ],
  'store-test': [
    { value: 'sub-test-data', label: '测试数据索引' },
    // ... 更多测试子索引
  ]
};

// 索引记录（50+条用于测试分页）
const MOCK_INDEX_RECORDS: IndexRecord[] = [
  {
    id: 'usr-2024-001',
    type: 'User',
    content: '用户资料：张三，注册时间2024-01-15，活跃用户',
    metadata: '{"email":"zhangsan@example.com","level":"VIP","region":"北京"}'
  },
  {
    id: 'doc-2024-001',
    type: 'Document',
    content: '技术文档：React开发最佳实践指南，包含Hooks使用、性能优化等内容...',
    metadata: '{"author":"技术部","category":"前端","created":"2024-03-01","views":1250}'
  },
  // ... 继续添加至少48条更多记录以测试分页功能
  // 建议包含不同type和不同长度的content/metadata用于测试UI显示
];
```

**数据说明**:
- **Index Store**: 3个选项，模拟主存储、备份存储、测试存储场景
- **Sub Index**: 总共9个子索引，分布在3个Store下（每个3-4个）
- **Index Records**: 至少50条记录，包含多种类型（User/Document/Product/Order等）
- **层级关系**: Sub Index选项根据Index Store动态过滤


## 实施阶段

### Phase 1: 数据层和工具函数

**交付物**:
1. `types.ts` - TypeScript接口定义（4个核心接口）
2. `mockData.ts` - 完整模拟数据
   - 3个Index Store选项
   - 9个Sub Index选项（分布在3个Store下）
   - 50+条IndexRecord记录（多种type，不同长度content）
3. `utils.ts` - 工具函数
   - `filterRecords()` - 根据搜索条件过滤记录
   - `validateSearchCriteria()` - 验证搜索条件
   - `getSubIndexOptions()` - 根据Index Store获取对应Sub Index选项

---

### Phase 2: UI组件开发

**交付物**:
1. `SearchForm.tsx` - 搜索表单（Select + Input + Button）
2. `ResultsTable.tsx` - 结果表格（四列，分页，省略号处理）
3. 加载状态和样式实现

**样式规范**:
- 背景色: `#f5f5f5`
- 主色调: `#6C5CE7`
- 表格行: `#ffffff` / `#fafafa` 交替

---

### Phase 3: 页面集成和路由

**交付物**:
1. `IndexManagementPage.tsx` - 主页面组件
2. `IndexManagementPage.module.css` - 页面样式
3. 更新 `App.tsx` - 添加路由 `/tir/index-management`
4. 更新 `SideMenu.tsx` - 添加导航菜单项

**核心逻辑**:
```typescript
const handleSearch = async () => {
  if (!validateSearchCriteria(searchCriteria)) {
    message.error('请至少选择Index Store或输入Resource ID');
    return;
  }
  setLoading(true);
  const filtered = filterRecords(searchCriteria, MOCK_INDEX_RECORDS);
  setSearchResults(filtered);
  setPagination({ current: 1, pageSize: 10, total: filtered.length });
  setLoading(false);
};
```

---

### Phase 4: 优化和边界情况

**处理项**:
- 搜索无结果显示空表格
- 快速连续点击禁用按钮
- 长内容Tooltip
- 性能优化

## 文件清单

### 新增文件
```
src/pages/sections/TIRPage/
├── IndexManagementPage.tsx
├── IndexManagementPage.module.css
├── SearchForm.tsx
├── ResultsTable.tsx
├── types.ts
├── mockData.ts
└── utils.ts
```

### 修改文件
```
src/App.tsx
src/components/layout/SideMenu.tsx
```

## 验收检查清单

### 用户故事1 - 执行索引搜索
- [x] Index Store下拉选择后显示选中值
- [x] Sub Index自动更新选项
- [x] Resource ID输入框正常
- [x] 搜索按钮显示结果
- [x] 空条件显示提示

### 用户故事2 - 分页结果
- [x] 四列表格显示正确
- [x] 行背景灰白相间
- [x] ≤10条不显示分页
- [x] >10条正确分页
- [x] 页码跳转正常
- [x] 长内容省略号+Tooltip

### 用户故事3 - 视觉设计
- [x] 灰白色背景
- [x] 紫色交互元素
- [x] 悬停效果
- [x] 间距合理
- [x] 即时反馈

### 成功标准
- [x] SC-001: 3次点击完成搜索
- [x] SC-002: 2秒内返回结果
- [x] SC-003: 500ms内分页切换
- [x] SC-004: 100ms内交互反馈
- [x] SC-005: 背景色清晰区分
- [x] SC-006: 视觉风格符合要求


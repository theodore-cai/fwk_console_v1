# 任务清单：TIR Index Management 搜索页面

**功能分支**: `003-index-management-search`  
**创建日期**: 2025-12-09  
**规格文档**: [spec.md](./spec.md) | [plan.md](./plan.md)

---

## 概览

本文档将实施计划分解为代码实现任务。任务按用户故事组织，聚焦代码开发，人工验证部分已精简。

**用户故事总数**: 3 (US1: 执行索引搜索, US2: 浏览和分页搜索结果, US3: 清晰的视觉设计和用户体验)  
**任务总数**: 39  
**实施策略**: 顺序执行，MVP优先（Phase 1-2-3-4-5-6）

---

## Phase 1: 数据层和工具函数

### 用户故事: 基础设施（无UI对应）

**目标**: 创建数据模型、模拟数据和工具函数

- [x] T001 创建目录 `src/pages/sections/TIRPage/`
- [x] T002 创建 `src/pages/sections/TIRPage/types.ts` 并定义4个核心接口：IndexRecord（id, type, content, metadata）、SearchCriteria（indexStore?, subIndex?, resourceId?）、PaginationInfo（current, pageSize, total）、DropdownOption（value, label）
- [x] T003 创建 `src/pages/sections/TIRPage/mockData.ts` 并导出MOCK_INDEX_STORES常量（3个DropdownOption：store-main主索引存储、store-backup备份索引存储、store-test测试索引存储）
- [x] T004 在mockData.ts中导出MOCK_SUB_INDEXES常量（Record<string, DropdownOption[]>类型，store-main下4个子索引、store-backup下3个子索引、store-test下2个子索引，共9个）
- [x] T005 在mockData.ts中导出MOCK_INDEX_RECORDS常量（IndexRecord[]类型，至少50条记录，包含User/Document/Product/Order等多种type，content和metadata长度不同用于测试UI）
- [x] T006 创建 `src/pages/sections/TIRPage/utils.ts` 并实现validateSearchCriteria(criteria: SearchCriteria): boolean函数（验证至少有indexStore或resourceId，返回布尔值）
- [x] T007 在utils.ts中实现getSubIndexOptions(indexStore: string): DropdownOption[]函数（从MOCK_SUB_INDEXES中返回对应的子索引数组，不存在返回空数组）
- [x] T008 在utils.ts中实现filterRecords(criteria: SearchCriteria, records: IndexRecord[]): IndexRecord[]函数（支持按indexStore、subIndex、resourceId精确匹配过滤，resourceId精确匹配，其他字段包含匹配）

---

## Phase 2: 搜索表单组件

### 用户故事1: 执行索引搜索

**目标**: 实现搜索表单UI和交互逻辑

- [x] T009 [US1] 创建 `src/pages/sections/TIRPage/SearchForm.tsx` 并定义Props接口（onSearch: (criteria: SearchCriteria) => void, loading: boolean）
- [x] T010 [US1] 在SearchForm中使用useState创建indexStore状态（string | undefined）
- [x] T011 [US1] 在SearchForm中使用useState创建subIndex状态（string | undefined）
- [x] T012 [US1] 在SearchForm中使用useState创建resourceId状态（string）
- [x] T013 [US1] 在SearchForm中添加Ant Design Select组件作为Index Store下拉选择器（options={MOCK_INDEX_STORES}, placeholder="选择Index Store", value={indexStore}, onChange更新indexStore状态并清空subIndex）
- [x] T014 [US1] 在SearchForm中添加Ant Design Select组件作为Sub Index下拉选择器（options通过getSubIndexOptions(indexStore)动态获取, disabled={!indexStore}, placeholder="选择Sub Index", value={subIndex}, onChange更新subIndex状态）
- [x] T015 [US1] 在SearchForm中添加Ant Design Input组件作为Resource ID输入框（placeholder="输入Resource ID", value={resourceId}, onChange更新resourceId状态）
- [x] T016 [US1] 在SearchForm中添加Ant Design Button组件（type="primary", onClick调用onSearch传递{indexStore, subIndex, resourceId}, loading={loading}）
- [x] T017 [US1] 在SearchForm的JSX中使用Ant Design Space组件包裹所有表单元素（direction="horizontal", size="middle"）

---

## Phase 3: 结果表格组件

### 用户故事2: 浏览和分页搜索结果

**目标**: 实现搜索结果表格和分页功能

- [x] T018 [US2] 创建 `src/pages/sections/TIRPage/ResultsTable.tsx` 并定义Props接口（data: IndexRecord[], pagination: PaginationInfo, onPageChange: (page: number) => void, loading: boolean）
- [x] T019 [US2] 在ResultsTable中定义columns常量（ColumnsType<IndexRecord>类型，包含4列：{title: 'ID', dataIndex: 'id', key: 'id', width: 150}, {title: 'TYPE', dataIndex: 'type', key: 'type', width: 120}, {title: 'CONTENT', dataIndex: 'content', key: 'content', ellipsis: {showTitle: false}, render: (text) => <Tooltip title={text}>{text}</Tooltip>}, {title: 'METADATA', dataIndex: 'metadata', key: 'metadata', ellipsis: {showTitle: false}, render: (text) => <Tooltip title={text}>{text}</Tooltip>}）
- [x] T020 [US2] 在ResultsTable的JSX中添加Ant Design Table组件（dataSource={data}, columns={columns}, rowKey="id", loading={loading}, pagination={false}）
- [x] T021 [US2] 在Table下方添加Ant Design Pagination组件（current={pagination.current}, pageSize={pagination.pageSize}, total={pagination.total}, onChange={(page) => onPageChange(page)}, showSizeChanger={false}, showTotal={(total, range) => `第${range[0]}-${range[1]}条，共${total}条`}）(每页10条)
- [x] T022 [US2] 在Table组件中添加rowClassName属性（(record, index) => index % 2 === 0 ? 'table-row-even' : 'table-row-odd'）

---

## Phase 4: 页面样式

### 用户故事3: 清晰的视觉设计和用户体验

**目标**: 实现页面样式和紫色主题

- [x] T023 [US3] 创建 `src/pages/sections/TIRPage/IndexManagementPage.module.css` 并定义.container类（background-color: #f5f5f5, padding: 16px, min-height: 100vh）
- [x] T024 [US3] 在CSS中定义.searchSection类（background: #fff, padding: 16px, border-radius: 8px, box-shadow: 0 2px 8px rgba(0,0,0,0.1), margin-bottom: 16px）
- [x] T025 [US3] 在CSS中定义.resultsSection类（background: #fff, padding: 16px, border-radius: 8px, box-shadow: 0 2px 8px rgba(0,0,0,0.1)）
- [x] T026 [US3] 在CSS中定义:global(.table-row-even)类（background-color: #ffffff）
- [x] T027 [US3] 在CSS中定义:global(.table-row-odd)类（background-color: #fafafa）
- [x] T028 [US3] 在CSS中定义:global(.ant-btn-primary)类（background-color: #6C5CE7, border-color: #6C5CE7）
- [x] T029 [US3] 在CSS中定义:global(.ant-btn-primary:hover)类（background-color: #5a4dd1, border-color: #5a4dd1）

---

## Phase 5: 页面集成

### 用户故事1+2+3: 完整页面功能

**目标**: 集成所有组件实现完整搜索页面

- [x] T030 创建 `src/pages/sections/TIRPage/IndexManagementPage.tsx` 并导入必要模块（React, useState, message from antd, SearchForm, ResultsTable, types, mockData, utils, styles）
- [x] T031 在IndexManagementPage中使用useState创建searchResults状态（IndexRecord[], 初始值[]）
- [x] T032 在IndexManagementPage中使用useState创建pagination状态（PaginationInfo, 初始值{current: 1, pageSize: 10, total: 0}）
- [x] T033 在IndexManagementPage中使用useState创建loading状态（boolean, 初始值false）
- [x] T034 在IndexManagementPage中实现handleSearch函数（参数criteria: SearchCriteria, 调用validateSearchCriteria验证，失败则message.error并return，成功则setLoading(true), 调用filterRecords获取结果, setSearchResults更新结果, setPagination更新分页{current: 1, pageSize: 10, total: 结果长度}, setLoading(false)）
- [x] T035 在IndexManagementPage中实现handlePageChange函数（参数page: number, 调用setPagination更新current为page）
- [x] T036 在IndexManagementPage的JSX中渲染结构（div.container包含div.searchSection（内含SearchForm）和div.resultsSection（内含ResultsTable））
- [x] T037 在IndexManagementPage中给SearchForm传递props（onSearch={handleSearch}, loading={loading}）
- [x] T038 在IndexManagementPage中给ResultsTable传递props（data={searchResults.slice((pagination.current-1)*10, pagination.current*10)}, pagination={pagination}, onPageChange={handlePageChange}, loading={loading}）

---

## Phase 6: 路由集成

### 目标: 将页面集成到应用路由和导航系统

- [x] T039 在 `src/App.tsx` 中导入IndexManagementPage组件（import IndexManagementPage from './pages/sections/TIRPage/IndexManagementPage'）
- [x] T040 在App.tsx的路由配置中添加新路由（在TIR相关路由附近添加：{ path: '/tir/index-management', element: <IndexManagementPage /> }）
- [x] T041 在 `src/components/layout/SideMenu.tsx` 中找到TIR菜单项配置位置
- [x] T042 在SideMenu.tsx的TIR子菜单中添加新菜单项（key: 'tir-index-management', label: 'Index Management', 点击跳转到/tir/index-management）

---

## Phase 7: 边界情况和最终验收

### 目标: 处理边界情况并进行验收测试

- [x] T043 在SearchForm组件的Button中添加disabled属性（disabled={loading}，防止快速连续点击）
- [x] T044 在IndexManagementPage的handleSearch中添加错误处理（try-catch包裹filterRecords调用，catch中message.error('搜索失败，请重试')并setLoading(false)）
- [x] T045 验收测试：运行npm run dev启动开发服务器，访问页面验证所有功能正常（搜索、分页、样式、边界情况）

---

## 立即开始

执行T001创建目录结构

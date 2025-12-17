/**
 * IndexRecord - 索引记录
 * 表示一条索引数据，包含唯一标识符、类型、内容和元数据
 */
export interface IndexRecord {
  id: string;              // 唯一标识符，支持字母数字及特殊字符
  type: string;            // 索引类型
  content: string;         // 索引内容
  metadata: string;        // 元数据信息
}

/**
 * SearchCriteria - 搜索条件
 * 表示用户的查询参数
 */
export interface SearchCriteria {
  indexStore?: string;     // 索引存储位置
  subIndex?: string[];     // 子索引名称（支持多选）
  resourceId?: string;     // 资源标识符
}

/**
 * PaginationInfo - 分页信息
 * 表示当前分页状态
 */
export interface PaginationInfo {
  current: number;         // 当前页码
  pageSize: number;        // 每页记录数（固定15条）
  total: number;           // 总记录数
}

/**
 * DropdownOption - 下拉选项
 * 用于Select组件的选项数据结构
 */
export interface DropdownOption {
  value: string;           // 选项值
  label: string;           // 显示文本
}

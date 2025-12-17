import { SearchCriteria, IndexRecord, DropdownOption } from './types';
import { MOCK_SUB_INDEXES } from './mockData';

/**
 * validateSearchCriteria - 验证搜索条件
 * 至少需要有indexStore或resourceId之一
 * @param criteria 搜索条件
 * @returns 是否有效
 */
export const validateSearchCriteria = (criteria: SearchCriteria): boolean => {
  return !!(criteria.indexStore || criteria.resourceId);
};

/**
 * getSubIndexOptions - 获取子索引选项
 * 根据索引存储获取对应的子索引列表
 * @param indexStore 索引存储
 * @returns 子索引选项数组
 */
export const getSubIndexOptions = (indexStore: string | undefined): DropdownOption[] => {
  if (!indexStore) {
    return [];
  }
  return MOCK_SUB_INDEXES[indexStore] || [];
};

/**
 * filterRecords - 过滤索引记录
 * 根据搜索条件过滤记录
 * @param criteria 搜索条件
 * @param records 索引记录数组
 * @returns 过滤后的记录数组
 */
export const filterRecords = (
  criteria: SearchCriteria,
  records: IndexRecord[]
): IndexRecord[] => {
  return records.filter((record) => {
    // 如果指定了indexStore，需要检查type是否匹配
    if (criteria.indexStore) {
      // 订单领域对应Order/OrderDetail，财务领域对应AP/AR/Finance
      const storeTypeMap: Record<string, string[]> = {
        'orderDomain': ['Order', 'OrderDetail', 'SR', 'job'],
        'finDomain': ['Finance', 'AP', 'AR', 'Invoice']
      };
      
      const allowedTypes = storeTypeMap[criteria.indexStore];
      if (allowedTypes && !allowedTypes.includes(record.type)) {
        return false;
      }
    }

    // 如果指定了subIndex，检查id前缀匹配（支持多个subIndex）
    if (criteria.subIndex && criteria.subIndex.length > 0) {
      // 子索引与id前缀对应关系
      const subIndexPrefixMap: Record<string, string> = {
        'SR': 'sr-',
        'job': 'job-',
        'AP': 'ap-',
        'AR': 'ar-'
      };
      
      const prefixes = criteria.subIndex.map(idx => subIndexPrefixMap[idx]).filter(Boolean);
      if (prefixes.length > 0) {
        const matchesPrefix = prefixes.some(prefix => record.id.startsWith(prefix));
        if (!matchesPrefix) {
          return false;
        }
      }
    }

    // 如果指定了resourceId，精确匹配
    if (criteria.resourceId) {
      return record.id === criteria.resourceId;
    }

    return true;
  });
};

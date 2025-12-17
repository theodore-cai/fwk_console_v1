import { DropdownOption, IndexRecord } from './types';

/**
 * MOCK_INDEX_STORES - 索引存储选项
 * 2个主要存储：订单领域、财务领域
 */
export const MOCK_INDEX_STORES: DropdownOption[] = [
  { value: 'orderDomain', label: 'orderDomain' },
  { value: 'finDomain', label: 'finDomain' }
];

/**
 * MOCK_SUB_INDEXES - 子索引选项（层级关系映射）
 * 根据索引存储分组，共4个子索引
 */
export const MOCK_SUB_INDEXES: Record<string, DropdownOption[]> = {
  'orderDomain': [
    { value: 'SR', label: 'SR' },
    { value: 'job', label: 'job' }
  ],
  'finDomain': [
    { value: 'AP', label: 'AP' },
    { value: 'AR', label: 'AR' }
  ]
};

/**
 * MOCK_INDEX_RECORDS - 索引记录（50+条用于测试分页）
 * 包含多种type和不同长度的content/metadata
 */
export const MOCK_INDEX_RECORDS: IndexRecord[] = [
  // SR Records (salesReturn)
  { id: 'sr-001', type: 'SR', content: 'CONTENT_LOWERCASE: PO001;PO002;John', metadata: 'ID:sr-001;TYPE:SR' },
  { id: 'sr-002', type: 'SR', content: 'CONTENT_LOWERCASE: PO003;PO004;PO005;Jane', metadata: 'ID:sr-002;TYPE:SR' },
  { id: 'sr-003', type: 'SR', content: 'CONTENT_LOWERCASE: INV001;INV002;Mike', metadata: 'ID:sr-003;TYPE:SR' },
  { id: 'sr-004', type: 'SR', content: 'CONTENT_LOWERCASE: RMA001;Sarah', metadata: 'ID:sr-004;TYPE:SR' },
  { id: 'sr-005', type: 'SR', content: 'CONTENT_LOWERCASE: PO006;PO007;PO008;Tom', metadata: 'ID:sr-005;TYPE:SR' },
  { id: 'sr-006', type: 'SR', content: 'CONTENT_LOWERCASE: INV003;INV004;Lisa', metadata: 'ID:sr-006;TYPE:SR' },
  { id: 'sr-007', type: 'SR', content: 'CONTENT_LOWERCASE: PO009;RMA002;Robert', metadata: 'ID:sr-007;TYPE:SR' },
  { id: 'sr-008', type: 'SR', content: 'CONTENT_LOWERCASE: INV005;INV006;Emily', metadata: 'ID:sr-008;TYPE:SR' },
  { id: 'sr-009', type: 'SR', content: 'CONTENT_LOWERCASE: PO010;PO011;David', metadata: 'ID:sr-009;TYPE:SR' },
  { id: 'sr-010', type: 'SR', content: 'CONTENT_LOWERCASE: RMA003;RMA004;Chris', metadata: 'ID:sr-010;TYPE:SR' },
  
  // Job Records
  { id: 'job-001', type: 'job', content: 'CONTENT_LOWERCASE: TASK001;TASK002;Alice', metadata: 'ID:job-001;TYPE:job' },
  { id: 'job-002', type: 'job', content: 'CONTENT_LOWERCASE: TASK003;Bob', metadata: 'ID:job-002;TYPE:job' },
  { id: 'job-003', type: 'job', content: 'CONTENT_LOWERCASE: TASK004;TASK005;TASK006;Charlie', metadata: 'ID:job-003;TYPE:job' },
  { id: 'job-004', type: 'job', content: 'CONTENT_LOWERCASE: TASK007;Diana', metadata: 'ID:job-004;TYPE:job' },
  { id: 'job-005', type: 'job', content: 'CONTENT_LOWERCASE: TASK008;TASK009;Edward', metadata: 'ID:job-005;TYPE:job' },
  { id: 'job-006', type: 'job', content: 'CONTENT_LOWERCASE: TASK010;Fiona', metadata: 'ID:job-006;TYPE:job' },
  { id: 'job-007', type: 'job', content: 'CONTENT_LOWERCASE: TASK011;TASK012;George', metadata: 'ID:job-007;TYPE:job' },
  { id: 'job-008', type: 'job', content: 'CONTENT_LOWERCASE: TASK013;Henry', metadata: 'ID:job-008;TYPE:job' },
  
  // AP Records (Accounts Payable)
  { id: 'ap-001', type: 'AP', content: 'CONTENT_LOWERCASE: AP001;AP002;Jessica', metadata: 'ID:ap-001;TYPE:AP' },
  { id: 'ap-002', type: 'AP', content: 'CONTENT_LOWERCASE: AP003;Kevin', metadata: 'ID:ap-002;TYPE:AP' },
  { id: 'ap-003', type: 'AP', content: 'CONTENT_LOWERCASE: AP004;AP005;AP006;Laura', metadata: 'ID:ap-003;TYPE:AP' },
  { id: 'ap-004', type: 'AP', content: 'CONTENT_LOWERCASE: AP007;Michael', metadata: 'ID:ap-004;TYPE:AP' },
  { id: 'ap-005', type: 'AP', content: 'CONTENT_LOWERCASE: AP008;AP009;Nancy', metadata: 'ID:ap-005;TYPE:AP' },
  
  // AR Records (Accounts Receivable)
  { id: 'ar-001', type: 'AR', content: 'CONTENT_LOWERCASE: AR001;AR002;Oscar', metadata: 'ID:ar-001;TYPE:AR' },
  { id: 'ar-002', type: 'AR', content: 'CONTENT_LOWERCASE: AR003;Patricia', metadata: 'ID:ar-002;TYPE:AR' },
  { id: 'ar-003', type: 'AR', content: 'CONTENT_LOWERCASE: AR004;AR005;AR006;Quinn', metadata: 'ID:ar-003;TYPE:AR' },
  { id: 'ar-004', type: 'AR', content: 'CONTENT_LOWERCASE: AR007;Rachel', metadata: 'ID:ar-004;TYPE:AR' },
  { id: 'ar-005', type: 'AR', content: 'CONTENT_LOWERCASE: AR008;AR009;Steven', metadata: 'ID:ar-005;TYPE:AR' },
  
  // Additional SR Records
  { id: 'sr-011', type: 'SR', content: 'CONTENT_LOWERCASE: PO012;PO013;Tanya', metadata: 'ID:sr-011;TYPE:SR' },
  { id: 'sr-012', type: 'SR', content: 'CONTENT_LOWERCASE: INV007;Uma', metadata: 'ID:sr-012;TYPE:SR' },
  { id: 'sr-013', type: 'SR', content: 'CONTENT_LOWERCASE: RMA005;PO014;Victor', metadata: 'ID:sr-013;TYPE:SR' },
  { id: 'sr-014', type: 'SR', content: 'CONTENT_LOWERCASE: PO015;William', metadata: 'ID:sr-014;TYPE:SR' },
  { id: 'sr-015', type: 'SR', content: 'CONTENT_LOWERCASE: INV008;INV009;Xander', metadata: 'ID:sr-015;TYPE:SR' },
  
  // Additional Job Records
  { id: 'job-009', type: 'job', content: 'CONTENT_LOWERCASE: TASK014;TASK015;Yara', metadata: 'ID:job-009;TYPE:job' },
  { id: 'job-010', type: 'job', content: 'CONTENT_LOWERCASE: TASK016;Zack', metadata: 'ID:job-010;TYPE:job' },
  
  // Additional AP Records
  { id: 'ap-006', type: 'AP', content: 'CONTENT_LOWERCASE: AP010;AP011;Alice', metadata: 'ID:ap-006;TYPE:AP' },
  { id: 'ap-007', type: 'AP', content: 'CONTENT_LOWERCASE: AP012;AP013;AP014;Beta', metadata: 'ID:ap-007;TYPE:AP' },
  
  // Additional AR Records
  { id: 'ar-006', type: 'AR', content: 'CONTENT_LOWERCASE: AR010;AR011;Gamma', metadata: 'ID:ar-006;TYPE:AR' },
  { id: 'ar-007', type: 'AR', content: 'CONTENT_LOWERCASE: AR012;Delta', metadata: 'ID:ar-007;TYPE:AR' }
];

import React from 'react';
import { Table, Pagination, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IndexRecord, PaginationInfo } from './types';

interface ResultsTableProps {
  data: IndexRecord[];
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
  loading: boolean;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  data,
  pagination,
  onPageChange,
  loading
}) => {
  const columns: ColumnsType<IndexRecord> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 150
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
      width: 120
    },
    {
      title: 'CONTENT',
      dataIndex: 'content',
      key: 'content',
      ellipsis: {
        showTitle: false
      },
      render: (text: string) => (
        <Tooltip title={text}>
          {text}
        </Tooltip>
      )
    },
    {
      title: 'METADATA',
      dataIndex: 'metadata',
      key: 'metadata',
      ellipsis: {
        showTitle: false
      },
      render: (text: string) => (
        <Tooltip title={text}>
          {text}
        </Tooltip>
      )
    }
  ];

  const rowClassName = (_record: IndexRecord, index: number) => {
    return index % 2 === 0 ? 'table-row-even' : 'table-row-odd';
  };

  return (
    <div>
      <Table<IndexRecord>
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
        pagination={false}
        rowClassName={rowClassName}
      />
      
      {pagination.total > 0 && (
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onChange={onPageChange}
          showSizeChanger={false}
          showTotal={(total, range) => `Items ${range[0]}-${range[1]} of ${total}`}
          style={{ marginTop: 16, textAlign: 'right' }}
        />
      )}
    </div>
  );
};

export default ResultsTable;

import React, { useState } from 'react';
import { message } from 'antd';
import SearchForm from './SearchForm';
import ResultsTable from './ResultsTable';
import { IndexRecord, SearchCriteria, PaginationInfo } from './types';
import { MOCK_INDEX_RECORDS } from './mockData';
import { validateSearchCriteria, filterRecords } from './utils';
import styles from './IndexManagementPage.module.css';

const IndexManagementPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<IndexRecord[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [loading, setLoading] = useState(false);

  const handleSearch = (criteria: SearchCriteria) => {
    try {
      if (!validateSearchCriteria(criteria)) {
        message.error('Please select Index Store or enter Resource ID');
        return;
      }

      setLoading(true);
      
      // 模拟异步搜索
      setTimeout(() => {
        const filtered = filterRecords(criteria, MOCK_INDEX_RECORDS);
        setSearchResults(filtered);
        setPagination({
          current: 1,
          pageSize: 10,
          total: filtered.length
        });
        setLoading(false);
      }, 300);
    } catch (error) {
      message.error('Search failed, please try again');
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPagination({
      ...pagination,
      current: page
    });
  };

  const paginatedData = searchResults.slice(
    (pagination.current - 1) * pagination.pageSize,
    pagination.current * pagination.pageSize
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <SearchForm onSearch={handleSearch} loading={loading} />
      </div>
      
      <div className={styles.resultsSection}>
        <ResultsTable
          data={paginatedData}
          pagination={pagination}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default IndexManagementPage;

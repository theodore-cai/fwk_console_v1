import React, { useState } from 'react';
import { Select, Input, Button, Space } from 'antd';
import { SearchCriteria } from './types';
import { MOCK_INDEX_STORES } from './mockData';
import { getSubIndexOptions } from './utils';

interface SearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [indexStore, setIndexStore] = useState<string | undefined>();
  const [subIndex, setSubIndex] = useState<string[]>([]);
  const [resourceId, setResourceId] = useState<string>('');

  const handleIndexStoreChange = (value: string) => {
    setIndexStore(value);
    setSubIndex([]); // 清空subIndex选择
  };

  const handleSubIndexChange = (value: string[]) => {
    setSubIndex(value);
  };

  const handleResourceIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResourceId(e.target.value);
  };

  const handleSearch = () => {
    onSearch({
      indexStore,
      subIndex: subIndex.length > 0 ? subIndex : undefined,
      resourceId: resourceId || undefined
    });
  };

  return (
    <Space direction="horizontal" size="middle" style={{ width: '100%' }}>
      <Select
        placeholder="Select Index Store"
        style={{ width: 200 }}
        value={indexStore}
        onChange={handleIndexStoreChange}
        options={MOCK_INDEX_STORES}
        allowClear
      />
      
      <Select
        placeholder="Select Sub Index"
        style={{ width: 200 }}
        value={subIndex}
        onChange={handleSubIndexChange}
        options={getSubIndexOptions(indexStore)}
        disabled={!indexStore}
        allowClear
        mode="multiple"
      />
      
      <Input
        placeholder="Enter Resource ID"
        style={{ width: 200 }}
        value={resourceId}
        onChange={handleResourceIdChange}
      />
      
      <Button
        type="primary"
        onClick={handleSearch}
        loading={loading}
        disabled={loading}
      >
        Search
      </Button>
    </Space>
  );
};

export default SearchForm;

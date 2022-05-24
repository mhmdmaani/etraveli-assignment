import { useEffect, useState } from 'react';

export const useSort = (data) => {
  const [sortedData, setSortedData] = useState([]);
  const [currentSortKey, setCurrentSortKey] = useState('');
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const compare = (a, b, k) => {
    return a[k]?.toString()?.localeCompare(b[k].toString(), 'en', {
      sensitivity: 'base',
    });
  };

  const onSort = (sortKey) => {
    setCurrentSortKey(sortKey);
    const afterSortedData = [...data].sort((a, b) => compare(a, b, sortKey));
    setSortedData(afterSortedData);
  };
  return {
    data: sortedData,
    onSort,
    currentSortKey,
  };
};

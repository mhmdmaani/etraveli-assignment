import { useEffect, useState } from 'react';

const filterData = (dt, key, searchTxt) => {
  return dt?.filter((dataObject) => {
    const isPassed = dataObject[key]
      .toUpperCase()
      .includes(searchTxt.toUpperCase());
    return isPassed;
  });
};

export const useSearch = (data, key) => {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(data);
    setSearchText('');
  }, [data]);

  const onChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text === '') {
      setResult(data);
    } else {
      const searchResults = filterData(data, key, text);
      setResult(searchResults);
    }
  };

  return {
    data: result,
    onChange,
    searchText,
  };
};

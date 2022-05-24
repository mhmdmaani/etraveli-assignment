import React from 'react';
import OrderBy from '../../../components/OrderBy/OrderBy';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { useSearch } from '../../../hooks/useSearch';
import { useSort } from '../../../hooks/useSort';
import FilmListItem from './FilmListItem';

function FilmsList({ films, onSelect, selected }) {
  const { data: sortedData, onSort, currentSortKey } = useSort(films);
  const {
    data: searchResults,
    onChange,
    searchText,
  } = useSearch(sortedData, 'title');

  return (
    <div>
      <OrderBy
        orderKeys={['episode_id', 'release_date']}
        onChangeOrder={onSort}
        currentSortKey={currentSortKey}
      />
      <SearchInput value={searchText} onChange={onChange} />
      {searchResults?.map((film) => (
        <FilmListItem
          key={film.episode_id}
          film={film}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default FilmsList;

import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filtersSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const normalizedValue = e.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <form>
      <label htmlFor="filter">
        <input
          className={css.filterInput}
          type="text"
          value={value}
          name="filter"
          onChange={handleChangeFilter}
          placeholder="Search..."
        ></input>
      </label>
    </form>
  );
};

export default Filter;

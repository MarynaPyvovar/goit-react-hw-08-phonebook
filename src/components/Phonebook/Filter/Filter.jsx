import React from 'react';
import { nanoid } from 'nanoid';
import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  }
  
  const filterId = nanoid();

  return (<div className={css.filterWrapper}>
    <label htmlFor={filterId} className={css.label}>Find contacts by name</label>
    <input
      id={filterId}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      className={css.input}
      placeholder='Input name' />
  </div>);
};
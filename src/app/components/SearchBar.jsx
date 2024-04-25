//SearchBar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../actions/userActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(updateSearchText(e.target.value));
  };
  
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="search" className="text-gray-800 font-bold mb-2 animate-fade-in">Search</label>
      <input 
        type="text" 
        id="search" 
        name="search" 
        placeholder="Search anything" 
        onChange={handleSearch} 
        className="px-4 py-2 border border-gray-800 rounded-md bg-gray-200 text-gray-800 w-full animate-slide-in"
      />
    </div>
  );
}

export default SearchBar;


//SearchBar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_USER_SUCCESS,
  fetchUsers,
  updateSearchText,
} from "../actions/userActions";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.user);
  const debouncedSearchText = useDebounce(searchText, 1000);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      dispatch(updateSearchText(e.target.value));
    }
  };

  useEffect(() => {
    if (!debouncedSearchText.trim()) {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: [],
      });
      return;
    }

    fetchUsers(debouncedSearchText)(dispatch);
  }, [dispatch, debouncedSearchText]);

  return (
    <div className="flex flex-col justify-center items-center">
      <label
        htmlFor="search"
        className="text-gray-800 font-bold mb-2 animate-fade-in"
      >
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search anything"
        onChange={handleChange}
        className="px-4 py-2 border border-gray-800 rounded-md bg-gray-200 text-gray-800 w-full animate-slide-in"
      />
    </div>
  );
};

export default SearchBar;

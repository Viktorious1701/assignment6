// userActions.js

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

export const fetchUsers = (searchText) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_USER_REQUEST,
      payload: [],
    });

    try {
      const response = await fetch(
        "api/accounts?" + new URLSearchParams({ searchTerms: searchText })
      );
      const data = await response.json();
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error("Error fetching data: ", err);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: [],
      });
    }
  };
};

export const updateSearchText = (searchText) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: searchText,
  };
};

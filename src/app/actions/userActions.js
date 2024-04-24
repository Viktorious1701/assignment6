//userActions.js
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const fetchUsers = (searchText) => {
    return (dispatch) => {
        fetch("api/accounts?" + new URLSearchParams({searchTerms: searchText}))
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: data,
                });
            }).catch((error) => {
                console.error("Error fetching data: ", error);
                // Clear the user list
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: [],
                });
            });
    };
}
export const updateSearchText = (searchText) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: searchText,
    };
}
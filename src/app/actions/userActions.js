// userActions.js

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
let timeoutId = null;
 
const typingDelay = 500; // Adjust typing delay 
let cancelRequest = false;
let firstTime = true;

export const fetchUsers = (searchText) => {
   
    return async (dispatch) => {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // If searchText becomes empty, dispatch an empty result immediately
        if (!searchText && !firstTime) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: [],
            });
            cancelRequest = true;
            firstTime = false;
            return;
        }
        dispatch({
            type: FETCH_USER_REQUEST,
            payload: [],
        });
        
        // Set a new timer, if user doesn't change the search text after the specified delay, then fetch the data
        timeoutId = setTimeout(async () => {
            try {
               
                console.log("fetching data with search text: ", searchText);
                const response = await fetch("api/accounts?" + new URLSearchParams({ searchTerms: searchText }));
                const data = await response.json();
               
                console.log(data);
                console.log(" cancel here ", cancelRequest);
                if(cancelRequest) {
                    cancelRequest = false;
                    return;
                }
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
                // Clear the user list
              
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: [],
                });
            } 
            
        }, typingDelay);
    };
};


// export const fetchUsers = async (searchText) => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     //abort fetching
//     const abortFetch = () => {
//         controller.abort();
//     }
//     if(!searchText) return {type: FETCH_USER_SUCCESS, payload: []};
//     try {
//         const response = await fetch("api/accounts?" + new URLSearchParams({searchTerms: searchText}));
//         const data = await response.json();
//         if(!signal.aborted){
//             return {
//                 type: FETCH_USER_SUCCESS,
//                 payload: data,
//             };
//         }
       
//     } catch (error) {
//         console.error("Error fetching data: ", error);
//     }

//      // Return an empty payload if the request was aborted or encountered an error
//      return {
//         type: FETCH_USER_SUCCESS,
//         payload: [],
//     };
// }

export const updateSearchText = (searchText) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: searchText,
    };
}
// userReducer.js
import { FETCH_USER_SUCCESS, UPDATE_SEARCH_TEXT, FETCH_USER_REQUEST } from '../actions/userActions';

const initialState = {
    users: [],
    filteredUsers: [], // [{id: 1, name: "Judy", email: " [email protected]" },...
    searchText: "",
    loading: false,
};
const userReducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                users: action.payload,
                filteredUsers: action.payload,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                filteredUsers: action.payload,
                loading: false
            }
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
                filteredUsers: state.users.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase())),
                loading: false
            }
        default:
            return state;
    }
}
export default userReducer;
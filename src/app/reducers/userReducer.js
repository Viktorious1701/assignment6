// userReducer.js
import { FETCH_USER_SUCCESS, UPDATE_SEARCH_TEXT } from '../actions/userActions';

const initialState = {
    users: [],
    searchText: "",
    filteredUsers: [] // [{id: 1, name: "Judy", email: " [email protected]" },...
};
const userReducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                filteredUsers: action.payload
            }
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
                filteredUsers: state.users.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default:
            return state;
    }
}
export default userReducer;
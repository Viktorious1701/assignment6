//UserList.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../actions/userActions';
const UserList = () => {
    const dispatch = useDispatch();
    const { filteredUsers, searchText } = useSelector((state) => state.user);
    console.log(filteredUsers);
    console.log("search text in userlist ", searchText);
    //const { filteredUsers } = useSelector((state) => state.filteredUsers);
    //console.log(" Use selector ",useSelector((state) => state.user.filteredUsers));
    useEffect(() => {
        dispatch(fetchUsers(searchText));
    }, [dispatch, searchText]);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredUsers.map((user) => (
                <div key={user.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <p className="text-gray-700">{user.email}</p>
                </div>
            ))}
        </div>

    )
}

export default UserList

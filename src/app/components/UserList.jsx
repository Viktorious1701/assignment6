//UserList.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIndicator from './LoadingIndicator'; // Import LoadingIndicator component
import { fetchUsers } from '../actions/userActions';

const UserList = () => {
    const dispatch = useDispatch();
    const { filteredUsers, searchText, loading } = useSelector((state) => state.user);

    useEffect(() => {
        // Fetch users when the component mounts or when searchText changes
        dispatch(fetchUsers(searchText));
    }, [dispatch, searchText]);

    // Render loading indicator if data is loading
    if (loading) {
        return <LoadingIndicator />;
    }

    // Render user list if data is loaded
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredUsers.map((user) => (
                <div key={user.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <p className="text-gray-700">{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;


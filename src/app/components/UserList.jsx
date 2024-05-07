//UserList.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import LoadingIndicator from './LoadingIndicator'; // Import LoadingIndicator component

const UserList = () => {
    const { filteredUsers, searchText, loading } = useSelector((state) => state.user);

    // Render loading indicator if data is loading
    if (loading) {
        return <LoadingIndicator />;
    }

    // Render user list if data is loaded
    if (filteredUsers.length === 0 && searchText.length > 0) {
        console.log('No users found');
        return <div className="text-center text-gray-800">No users found</div>
    }
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredUsers.map((user) => (
                <div key={user.id} className="bg-gray-100 p-4 rounded-md shadow-md ">
                    <h1 className="text-2xl font-bold mb-2">{user.id}</h1>
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <img src={user.avt} alt="" className="rounded-full w-20 h-20" />
                </div>
            ))}
        </div>
    );
};

export default UserList;


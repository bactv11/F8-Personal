import React from 'react';

const UserItem = React.memo(({ user }) => {
    console.log(' Render UserItem:', user.name);

    return (
        <div style={{
            borderBottom: '1px solid #ccc',
            padding: '8px 0'
        }}>
             {user.name}
        </div>
    );
});

export default UserItem;

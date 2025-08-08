import React from 'react';

export const UserCard: React.FC = ({username}: {username?: string}) => {
  return (
    <div style={{border: "1px, red, solid"}}>
        <div>username: {username ?? 'user'}</div>
        <div>password: 123</div>
    </div>
  );
};

export default UserCard;
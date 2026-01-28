import React from 'react';

function UserInfo(props) {
  return (
    <div>
      
      <h2>User Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserInfo;
import React from 'react';


function UserProfile(props) {
  return (
    <div className="profile-card" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h2>User Profile</h2>
     
    
      <h3>{props.name}</h3>                         
      <p><strong>Age:</strong> {props.age}</p>       
      <p><strong>Email:</strong> {props.email}</p>   
      <p><strong>Bio:</strong> {props.bio}</p>       
      <p><strong>Location:</strong> {props.location}</p>
    </div>
  );
}


export default  UserProfile;
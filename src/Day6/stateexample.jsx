import React, { useState } from "react";
import LogoutButton from "./logoutbutton";
import LoginButton from "./loginbutton";
let StateExample=()=>{
    let [count,setCount]=useState(0);
    let [loggedIn,setLoggedIn]=useState(true);
    let handleIncrement=()=>{
        setCount(count+1);
    } 
    return(
        <div>
            <h1>state example</h1>

        <h4>Count Value:{count}</h4>

        {count%2===0?<h3>Even Number</h3>:<h3>Odd Number</h3>}

        <button onClick={handleIncrement}>Increment</button>

        {loggedIn ? <LogoutButton logoutOnClick={()=>setLoggedIn(false)}/>

        :<LoginButton loginOnClick={()=>setLoggedIn(true)}/>}
        
        </div>
    )
}
export default StateExample;
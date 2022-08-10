import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const token = useSelector(state => state.token);
    return (
        <div style={{display : 'flex' , justifyContent : "space-around"}}>
           <Link to="/">Home</Link>
           <Link to = "/newtask">New Task</Link>
            {!token?<><Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link></>:null}
        </div>
    )
}
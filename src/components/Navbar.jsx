import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const token = useSelector(state => state.token);
    return (
        <>
           <Link to="/">Home</Link>
            {!token?<><Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link></>:null}
        </>
    )
}
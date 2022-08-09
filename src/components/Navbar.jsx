import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
           <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>
    )
}
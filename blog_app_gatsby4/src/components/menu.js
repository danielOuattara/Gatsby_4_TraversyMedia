import React from 'react';
import { Link } from 'gatsby';


const Menu = () => {
    return (
        <nav style = {{background: '#f4f4f4',paddingTop: '10px',display: 'flex',justifyContent: 'space-around'}}>
            <Link to = "/"> Home </Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>   
        </nav>
    );
}

export default Menu;
import React from 'react';
import logo from '../resources/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='flex'>
                <img className='w-[40px] h-[40px]' src={logo} alt="" />
                <h3>HERO.IO</h3>
            </div>
            <div>
                <NavLink>Home</NavLink>
                <NavLink>Apps</NavLink>
                <NavLink>Installation</NavLink>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;
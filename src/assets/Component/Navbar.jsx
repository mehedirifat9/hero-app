import React from 'react';
import logo from '../resources/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-10'>
            <div className='flex items-center'>
                <Link to='/' className='flex items-center'><img className='w-[40px] h-[40px]' src={logo} alt="" />
                <h3 className='font-bold ml-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3></Link>
            </div>
            <div className='flex gap-10 font-bold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/apps'>Apps</NavLink>
                <NavLink to='/installation'>Installation</NavLink>
            </div>
            <div className='flex items-center'>
                <Link to='https://github.com/mehedirifat9' target='blank' className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 rounded-sm text-white font-semibold'><FaGithub className='text-white' />Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;
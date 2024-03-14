import React from 'react'
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';
import { FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    const navLinks = [
        // { id: 1, icon: <FaWallet size={23} />, link: '/' },
        // { id: 2, icon: <FaUser size={23} />, link: '/' },
        { id: 3, icon: <IoLogOutOutline size={28} />, link: '/' },
    ]
    return (
        <div className='px-2 px-sm-4 border-bottom  d-flex align-items-center justify-content-between'>
            <NavLink to={'/'}>
                <img src={logo} className='logo' />
            </NavLink>
            <div className='d-flex align-items-center justify-content-between gap-3'>
                {navLinks.map((item) => {
                    return <NavLink className={'text-light'} to={item.link} key={item.id}>
                        {item.icon}
                    </NavLink>
                })}
                <NavLink to={'/login'}>
                    <Button variant="primary">Login</Button>
                </NavLink>

            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import '../assets/css/footer.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { FaGit, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";

const Footer = () => {
    const footerLinks = [
        { id: 1, icon: <IoHomeOutline size={25} />, title: 'Home', link: '/' },
        // { id: 2, icon: <FaLock size={20} />, title: 'Change Password', link: '/change-password' },
        { id: 2, icon: <FaClock className='icon' size={20} />, title: 'History', link: '/history' },

        { id: 4, icon: <IoNewspaper className='icon' size={20} />, title: 'Game Log', link: '/game-log' },
        { id: 3, icon: <FaGift className='icon' size={20} />, title: 'Promotion', link: '/promotion' },
        { id: 5, icon: <FaUser className='icon' size={25} />, title: "Profile", link: '/profile' },
    ]
    return (
        <div className='footer
         position-fixed d-flex   bottom-0 left-0 right-0 py-2 px-2 px-sm-3  shadow-lg'>
            {footerLinks.map((item) => {
                return <NavLink className={'text-center'} to={item.link} key={item.id}>
                    <div>{item.icon}</div>
                    <span>{item.title}</span>
                </NavLink>
            })}
        </div>
    )
}

export default Footer

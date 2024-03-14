import React from 'react'
import '../assets/css/footer.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        { id: 1, icon: <IoHomeOutline size={25} />, title: 'Home', link: '/' },
        { id: 2, icon: <FaWallet size={25} />, title: 'Wallet', link: '/wallet' },
        { id: 3, icon: <FaGift size={25} />, title: 'Promotion', link: '/promotion' },
        { id: 4, icon: <FaUser size={25} />, title: "Profile", link: '/profile' },
    ]
    return (
        <div className='footer
         position-fixed d-flex d-md-none bottom-0 left-0 right-0 py-3 px-2 px-sm-3  shadow-lg'>
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

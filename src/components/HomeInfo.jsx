import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const HomeInfo = () => {
    const infos = [
        { id: 1, title: 'History', icon: <FaClock size={21} />, link: '/history' },
        { id: 1, title: 'Game Log', icon: <IoNewspaper size={21} />, link: '/game-log' },
        { id: 3, title: 'Promotion', icon: <FaGift size={23} />, link: '/promotion' },
        { id: 4, title: 'Profile', icon: <FaUser size={23} />, link: '/profile' },
    ]
    return (
        <div className='mt-4 mb-sm-4 d-none d-md-flex align-items-center justify-content-start gap-4 gap-sm-5 text-center '>
            {infos.map((item) => {
                return <NavLink className={'text-light mx-sm-5'} key={item.id} to={item.link} >
                    {item.icon}
                    <h6 className='mt-2'>{item.title}</h6>
                </NavLink>
            })}
        </div>
    )
}

export default HomeInfo

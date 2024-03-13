import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const HomeInfo = () => {
    const infos = [
        { id: 1, title: 'Wallet', icon: <FaWallet size={25} />, link: '/' },
        { id: 2, title: 'Promotion', icon: <FaGift size={25} />, link: '/' },
        { id: 3, title: 'Profile', icon: <FaUser size={25} />, link: '/' },
    ]
    return (
        <div className='mt-4 mb-sm-4 d-flex align-items-center justify-content-start gap-4 gap-sm-5 text-center '>
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

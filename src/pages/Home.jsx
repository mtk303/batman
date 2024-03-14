import React from 'react'
import Carousel from '../components/Carousel'
import '../assets/css/home.css';
import HomeInfo from '../components/HomeInfo';
import HomeTabs from '../components/HomeTabs';
const HomePage = () => {
    return (
        <div>
            <Carousel />
            <div className='px-2 px-sm-4'>
                <HomeInfo />
                <marquee direction='left' className=' my-2  text-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel error, reprehenderit aliquam nesciunt quo aspernatur, esse impedit quidem rerum deleniti doloremque alias est. Hic odit esse adipisci quod iure?
                </marquee>
                <HomeTabs />
            </div>
        </div>
    )
}

export default HomePage

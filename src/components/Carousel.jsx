import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import b4 from '../assets/images/b4.png';

const Carousel = () => {
    const banners = [b1, b2, b3, b4];
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            {banners.map((item, index) => {
                return <SwiperSlide key={index}>
                    <img className='bannerImg' src={item} />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Carousel

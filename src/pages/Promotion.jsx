import React from 'react'
import p1 from '../assets/images/p1.gif';
import p2 from '../assets/images/p2.gif';
import p3 from '../assets/images/p3.gif';
import p4 from '../assets/images/p4.gif';
import p5 from '../assets/images/p5.gif';
import p6 from '../assets/images/p6.gif';
import p8 from '../assets/images/p8.gif';
import p9 from '../assets/images/p9.gif';
import '../assets/css/promotion.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function PromotionPage() {
    const imgs = [
        p1, p2, p3, p4, p5, p6, p8, p9

    ]
    return (
        <div className="py-5 px-3 px-sm-5 mb-5">
            <h1 className="text-center">Promotion</h1>
            {imgs.map((img, index) => {
                return <img src={img} className='my-3 promotionImg' key={index} />
            })}
        </div>
    );
}

export default PromotionPage;

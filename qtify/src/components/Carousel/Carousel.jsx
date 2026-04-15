import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import 'swiper/css';

import LeftArrow from '../../assests/left.svg';
import RightArrow from '../../assests/right.svg';
import styles from './Carousel.module.css';

function LeftNav({navRef}){
    return (
        <button ref={navRef} className={styles.navLeft}>
            <img 
            src={LeftArrow}
            alt="Previous" />
        </button>
    );
}

function RightNav({navRef}){
    return (
        <button ref={navRef} className={styles.navRight}>
            <img
             src={RightArrow}
             alt="Next" />
        </button>
    );
}

function Carousel({children}){
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={styles.carouselWrapper}>
            <LeftNav navRef={prevRef} />

            <Swiper 
            modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
            }}
            onSwiper={(swiper)=>{
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();

            }}
            breakpoints={{
            320:  { slidesPerView: 2, spaceBetween: 8  },
            600:  { slidesPerView: 3, spaceBetween: 12 },  
            900:  { slidesPerView: 5, spaceBetween: 16 },  
            1200: { slidesPerView: 7, spaceBetween: 16 },  
            }}
            >
            {children && React.Children.map(children,(child)=>(
                <SwiperSlide>{child}</SwiperSlide>
            ))}

            </Swiper>
            <RightNav navRef={nextRef} />
        </div>
    );
}

export default Carousel
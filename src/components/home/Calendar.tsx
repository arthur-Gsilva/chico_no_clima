'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { CalendarData } from '@/data/CalendarData';
import { CalendarCard } from './CalendarCard';

export const Calendar = () => {
    return(
        <section className="">
            <h2>Agenda - Chico no clima</h2>
            <h5 className='mb-10'>Espaço para acompanhar todas as movimentações do projeto Chico No Clima!</h5>

            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {CalendarData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <CalendarCard  item={data}/>
                    </SwiperSlide>
                    
                ))}
            </Swiper>
        </section>
    )
}
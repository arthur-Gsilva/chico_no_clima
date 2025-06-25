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
            <h5 className='mb-10 text-lg'>Espaço para acompanhar todas as movimentações do projeto Chico No Clima!</h5>

            <Swiper
                spaceBetween={20}
                slidesPerView={1} // valor padrão
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    1024: {
                    slidesPerView: 4,
                    },
                }}
            >
                {CalendarData.map((data) => (
                    <SwiperSlide key={data.id}>
                    <CalendarCard item={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
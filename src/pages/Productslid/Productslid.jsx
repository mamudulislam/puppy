import React from 'react';
import { productdata } from './Productdata';
import Productcard from './Productcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Productslid/style.css';

const Productslid = () => {
    return (
        <div className="container px-4 relative">
            <div className="mt-[180px] text-center">
                <p className="font-Manjari text-[24px] font-normal">Supplies</p>
                <h2 className="font-Poppins text-[30px] font-semibold mt-[9px] mb-[73px]">
                    Pick Our Products
                </h2>
            </div>
            <button
                className="swiper-button-prev-custom absolute top-1/2 left-[-20px] z-10 transform -translate-y-1/2 text-black text-2xl bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Previous slide"
            >
                &#10094;
            </button>
            <button
                className="swiper-button-next-custom absolute top-1/2 right-[-20px] z-10 transform -translate-y-1/2 text-black text-2xl bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Next slide"
            >
                &#10095;
            </button>

            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Pagination, Navigation]}
            >
                {productdata.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Productcard Productdata={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Productslid;

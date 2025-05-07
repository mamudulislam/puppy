import React from 'react';
import { Button } from "@/components/ui/button";
import BannerImage from '../../../assets/BannerImage/BannerImage.png';
import Bannershap from '../../../assets/BannerShap01/Bannershap.jsx';

const Banner = () => {
    return (
        <section className='container mx-auto px-4 py-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className='order-1 md:order-0'>
                    <h1 className="font-manajari text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-[#27233A]">
                        Potty train your pup the easy way
                    </h1>
                    <p className="font-poppins text-lg sm:text-xl md:text-2xl leading-relaxed text-[#27233A] mt-6">
                        Log your dog's pees, poops and meals and Puppy Potty Log will use the data to create a custom house training schedule unique to your fur baby.
                    </p>
                    <Button className="text-white bg-[#F9CE3B] font-semibold font-poppins text-base px-10 py-5 mt-8 rounded-full">
                        Join Us
                    </Button>
                </div>
                <div className='relative w-full'>
                    <div className='absolute top-0 right-0 z-10 hidden md:block'>
                        <Bannershap />
                    </div>
                    <img
                        className="w-full relative z-0"
                        src={BannerImage}
                        alt="Illustration of a puppy being trained"
                    />
                    <div className='absolute bottom-0 left-0 z-10 hidden md:block'>
                        <Bannershap />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

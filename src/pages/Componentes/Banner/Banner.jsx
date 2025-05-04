import React from 'react'
import { Button } from "@/components/ui/button"
import BannerImage from '../../../assets/BannerImage/BannerImage.png'
import Bannershap from '../../../assets/BannerShap01/Bannershap.jsx'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 justify-between items-center">
                <div>
                    <h1 className="font-manajari text-[70px] font-bold leading-[96px] text-[#27233A]">
                        Potty train your pup the easy way
                    </h1>
                    <p className="font-poppins text-[24px] leading-[40px] text-[#27233A]">
                        Log your dog's pees, poops and meals and Puppy Potty Log will use the data to create a custom house training schedule unique to your fur baby.
                    </p>
                    <Button className="text-white bg-[#F9CE3B] font-semibold font-poppins text-base px-[66px] py-[30px] mt-[31px] rounded-full">
                        Join Us
                    </Button>
                </div>
                <div className='relative'>
                    <div className='absolute top-[118px] right-0'>
                        <Bannershap />
                    </div>
                    <img className="w-full" src={BannerImage} alt="BannerImage" />
                    <div className='absolute bottom-0 left-0'>
                        <Bannershap />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
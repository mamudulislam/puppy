import React from 'react';
import Download from '../../assets/Download/Download.png'

const DownloadTrackingSheet = () => {
    return (
        <section className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white">
            {/* Left Side */}
            <div className="max-w-lg">
                <h2 className="w-[650px] font-Poppins font-medium leading-[80px] text-[55px]">
                    Download Our Tracking Sheet
                </h2>
                <div className="mb-10">
                    <h3 className="font-Poppins font-medium text-[30px] leading-[40px] mb-6">Train Your Pup :</h3>
                    <p className="w-[670px] font-Poppins font-normal text-2xl mb-[75ox]">
                        Log your dog’s pees, poops and meals and Puppy Potty Log will use the data to create a custom housetraining schedule unique to your fur baby.
                    </p>
                </div>
                <button className=" bg-yellow-400 text-white font-semibold py-4 px-6 rounded-md hover:bg-yellow-500 transition">
                    Download Now
                </button>
            </div>

            {/* Right Side */}
            <div className="max-w-xs w-full">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={Download}
                        alt="Dogs running"
                        className="w-[370px] h-[508px] object-cover"
                    />


                </div>
            </div>
        </section>
    );
};

export default DownloadTrackingSheet;

import React from "react";
import logo from "../../assets/Logo/Logo.png"
import Googleplay from "../../assets/Appfolder/PlayStore.png"
import Appstore from "../../assets/Appfolder/Appstore.png"
const Footer = () => {
    return (
        <footer className="container bg-gray-50 text-gray-700 px-6 md:px-20 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Puppy Potty Log" className="w-[220px] h-[79px] mr-2" />

                    </div>
                    <p className="w-[418px] font-Poppins text-[18px] font-normal leading-[32px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.
                    </p>
                </div>
                <div>
                    <h4 className="font-Poppins text-2xl font-medium mb-[48px] mt-5">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400 font-Poppins text-[16px] font-normal leading-[24px]">App</a></li>
                        <li><a href="#" className="hover:text-orange-400 font-Poppins text-[16px] font-normal leading-[24px]">How To</a></li>
                        <li><a href="#" className="hover:text-orange-400 font-Poppins text-[16px] font-normal leading-[24px]">Courses</a></li>
                        <li><a href="#" className="hover:text-orange-400 font-Poppins text-[16px] font-normal leading-[24px]">Blog</a></li>
                        <li><a href="#" className="hover:text-orange-400 font-Poppins text-[16px] font-normal leading-[24px]">Products</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-Poppins text-2xl font-medium mb-[56px] mt-5">Download Our App</h4>
                    <p className="font-Poppins text-[18px] w-[270px] font-normal leading-[28px] mb-[43px]">
                        Available on Google Play and App Store.
                    </p>
                    <div className="flex space-x-4">
                        <img src={Googleplay} alt="Google Play" className="h-10" />
                        <img src={Appstore} alt="App Store" className="h-10" />
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t pt-6 text-xs flex flex-col md:flex-row justify-between items-center">
                <p className="font-Poppins text-[14px] font-normal">Copyright © 2023 potty.app</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="font-Poppins text-[14px] font-normal">Terms of Service</a>
                    <span>|</span>
                    <a href="#" className="font-Poppins text-[14px] font-normal">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

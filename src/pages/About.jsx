import React from "react";
import dogTrainerImage from "../assets/DogTrainerImage/DogTrainerImage.png";

const About = () => {
    return (
        <>
            <div className="text-center px-4 md:px-0 mt-10">
                <p className="text-gray-600 text-xl md:text-2xl font-medium">About Us</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-Poppins mt-2 leading-snug">
                    Best Service For Training <br className="hidden md:block" />
                    Your Lovely Dog
                </h2>
            </div>

            <section className="flex flex-col items-center justify-start md:flex-row md:justify-between px-6 py-20 bg-white">
                <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-yellow-400 rounded-full -z-10 top-0"></div>
                    <img
                        src={dogTrainerImage}
                        alt="Dog trainers"
                        className="w-64 md:w-80 h-auto object-cover z-10"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-Poppins font-semibold">
                        We Are The World’s Most <br /> Trusted Animal Trainer
                    </h3>
                    <p className="mt-4 text-lg font-Poppins max-w-xl mx-auto md:mx-0">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Neque Et Aliquam Tincidunt.
                        Auctor Pellentesque Vestibulum Est. Mattis Fermentum Pulvinar Gravida
                        Dictumst Sagittis. Sit Cursus Nulla Mattis. Gravida Enim In Fusce
                        Maecenas Vel Cras Turpis.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300 hover:text-amber-50 transition duration-300">
                        About Us
                    </button>
                </div>
            </section>
        </>
    );
};

export default About;

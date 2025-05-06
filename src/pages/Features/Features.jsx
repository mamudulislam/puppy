import React from "react";
import Mobail from "../../assets/Mobail/Mobile1.png";
import Dog from "../../assets/Dog/Dog.png";

const features = [
    {
        title: "Dog Walking",
        description: "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
        image: Dog,
    },
    {
        title: "Dog Gromming",
        description: "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
        image: Dog,
    },
    {
        title: "Meet A Sitter",
        description: "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
        image: Dog,
    },
    {
        title: "Dog Training",
        description: "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
        image: Dog,
    },
];

const FeaturesSection = () => {
    return (
        <section className="w-[1440px] mx-auto py-16 bg-white text-center mt-[100px] mb-[100px]">
            <h4 className="text-gray-500 mb-2">Features</h4>
            <h2 className="text-3xl font-bold mb-12">Our Best Features</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-60">
                <div className="flex flex-col gap-12">
                    {features.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex items-center gap-4 max-w-xs text-left">
                            <img src={item.image} alt={item.title} className="w-16 h-16" />
                            <div>
                                <h3 className="font-Poppins text-[18px] font-semibold pb-[8px]">{item.title}</h3>
                                <p className="font-Poppins text-[14px] leading-[23px] font-medium w-[285px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-[300px]">
                    <img
                        src={Mobail}
                        alt="App Preview"
                        className="w-full"
                    />
                </div>

                <div className="flex flex-col gap-12">
                    {features.slice(2, 4).map((item, index) => (
                        <div key={index} className="flex items-center gap-4 max-w-xs text-left md:text-right">
                            <div className="md:order-2">
                                <h3 className="font-Poppins text-[18px] font-semibold pb-[8px]">{item.title}</h3>
                                <p className="font-Poppins text-[14px] leading-[23px] font-medium w-[285px]">{item.description}</p>
                            </div>
                            <img src={item.image} alt={item.title} className="w-16 h-16 md:order-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

import React from 'react';

const Productcard = ({ Productdata }) => {
    const { image, features, foodName, buttonText } = Productdata;

    return (
        <div className="bg-white rounded-[10px] shadow-md overflow-hidden transition hover:scale-105 duration-300 mb-7">
            <div className="p-6 flex justify-center">
                <img src={image} alt={foodName} className="h-[260px]" />
            </div>
            <div className="px-6 pb-6">
                <ul className="space-y-2 mb-4">
                    {features.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                            <img src={item.icon} alt="check icon" className="w-5 h-5" />
                            {item.title}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{foodName}</span>
                    <button className="bg-[#FDCB4E] px-4 py-1 rounded-[5px] text-white font-medium hover:bg-yellow-400 transition">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;

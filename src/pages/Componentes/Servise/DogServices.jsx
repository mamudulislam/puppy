import React from "react";

const services = [
    {
        title: 'Dog Adoption',
        description:
            'Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.',
        icon: '🎓',
    },
    {
        title: 'Dog Breeding',
        description:
            'Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.',
        icon: '🐶',
    },
    {
        title: 'Dog Shelter',
        description:
            'Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.',
        icon: '🏠',
    },
];

const DogServices = () => {
    return (
        <div className="container flex flex-col md:flex-row justify-center items-stretch gap-6 p-[12px] mt-20 bg-gray-50">
            {services.map((service, idx) => (
                <div
                    key={idx}
                    className={`
                        group flex flex-col items-center text-center rounded-xl p-6 shadow-lg transition-all duration-300
                        bg-white text-black hover:bg-yellow-400 hover:text-white
                        flex-1 min-w-[280px] max-w-[370px] h-full hover:shadow-xl hover:scale-[1.02]
                    `}
                >
                    <div className={`
                        bg-yellow-400 text-white group-hover:bg-white group-hover:text-yellow-500
                        rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-6
                        transition-all duration-300 group-hover:scale-110
                    `}>
                        {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-white">
                        {service.title}
                    </h2>
                    <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default DogServices;

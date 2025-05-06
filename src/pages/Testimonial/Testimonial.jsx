import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet consectetur. Neque sed quis placerat semper feugiat. Nisi egestas lorem non sed aenean risus sit vel volutpat. Commodo est malesuada neque tortor convallis. Commodo luctus viverra vulputate porttitor. Pulvinar facilisis tempus elementum amet. Magna in orci orci eu. Morbi quisque faucibus elit diam massa sed mi ultricies semper. Eu metus pulvinar egestas mauris pulvinar auctor.",
        name: "Dennis Callis",
        time: "11:30 PM",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur. Neque sed quis placerat semper feugiat. Nisi egestas lorem non sed aenean risus sit vel volutpat. Commodo est malesuada neque tortor convallis. Commodo luctus viverra vulputate porttitor. Pulvinar facilisis tempus elementum amet. Magna in orci orci eu. Morbi quisque faucibus elit diam massa sed mi ultricies semper. Eu metus pulvinar egestas mauris pulvinar auctor.",
        name: "Mark Anderson",
        time: "9:15 AM",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 5,
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet consectetur. Neque sed quis placerat semper feugiat. Nisi egestas lorem non sed aenean risus sit vel volutpat. Commodo est malesuada neque tortor convallis. Commodo luctus viverra vulputate porttitor. Pulvinar facilisis tempus elementum amet. Magna in orci orci eu. Morbi quisque faucibus elit diam massa sed mi ultricies semper. Eu metus pulvinar egestas mauris pulvinar auctor..",
        name: "Sophie Grant",
        time: "3:45 PM",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="w-[1440px] mx-auto bg-gray-50 py-10">
            <div className="text-center mb-10">
                <h5 className="text-gray-500">Testimonial</h5>
                <h2 className="text-2xl font-bold">What Our Clients Say</h2>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                className="px-4 max-w-6xl mx-auto"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="bg-white rounded-lg shadow-md p-6 relative h-full">
                            <div className="absolute -top-0 left-4 bg-yellow-400 p-2 rounded-full">
                                <FaQuoteLeft className="text-white text-2xl" />
                            </div>

                            <p className="text-gray-600 mt-6">{testimonial.text}</p>
                            <div className="flex items-center mt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-auto text-gray-400 text-sm">{testimonial.time}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

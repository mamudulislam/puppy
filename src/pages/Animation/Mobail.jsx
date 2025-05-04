import React, { useEffect } from 'react'
import Appstore from '../../assets/Appfolder/Appstore.png'
import PlayStore from '../../assets/Appfolder/PlayStore.png'
import Mobail1 from '../../assets/Mobail/Mobile1.png'
import Mobail2 from '../../assets/Mobail/Mobile2.png'
import { motion, useAnimate, useAnimation } from "motion/react"
import { animate, easeInOut } from 'motion'
const Mobail = () => {
    const Animation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    let animatefirstdotlike = useAnimation()

    useEffect(() => {
        const hendleScrollFirst = () => {
            const scrollY = window.scrollY
            animatefirstdotlike.start({
                scale: 1 + scrollY / 42000,
                rotate: -(1 + scrollY / 500),
                transition: {
                    duration: 0.5, ease: [0.25, 1, 0.5, 1],
                    type: "spring",
                    stiffness: 300,
                },

            })
        }
        window.addEventListener('scroll', hendleScrollFirst,)
        return () => {
            window.removeEventListener('scroll', hendleScrollFirst,)
        }
    }, [])




    return (
        <div className='container mx-auto mt-5'>
            <div className='grid grid-cols-2'>
                <section>
                    <h2 className='font-medium font-Poppins text-[55px] leading-[85px] w-[516px] mb-[17px]'>One Mobile App For Your Lovely Pet</h2>
                    <p className='w-[554px] text-[19px] leading-[34px] mb-[64px]'>Lorem ipsum dolor sit amet consectetur. Magna dictumst mattis tempus ac dignissim ultricies. Sodales tellus egestas ac viverra mauris enim bibendum commodo aliquam. Elementum et est semper faucibus imperdiet urna at sagittis. Nunc sit pellentesque in odio ultrices volutpat nunc nec lacus. Sed orci faucibus.    </p>
                    <h2 className='font-Poppins font-semibold text-[30px] mb-[50px]'>Download The App</h2>

                    <div class="flex space-x-4">
                        <img src={PlayStore} alt="GooglePlay" class="h-[100px] w-auto mr-2" />
                        <img src={Appstore} alt="AppStore" class="h-[100px] w-auto mr-2" />
                    </div>

                </section>
                <section className='relative w-full'>
                    <div className="relative flex justify-end space-x-4">
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            variants={Animation}
                            src={Mobail1}
                            alt="Mobail1"
                            viewport={{ once: true }}
                            transition={{
                                staggerChildren: 0.2,
                                ease: easeInOut,
                                duration: 0.5,
                            }}
                            animate={animatefirstdotlike}
                            className="h-[600px] w-auto mr-26 absolute right-[0px] bottom-[-20px]"
                        />
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            variants={Animation}
                            src={Mobail2}
                            alt="Mobail2"
                            viewport={{ once: true }}
                            transition={{
                                staggerChildren: 0.2,
                                ease: easeInOut,
                                duration: 0.5,
                            }}
                            animate={animatefirstdotlike}
                            className="h-[600px] w-auto mr-68"
                        />
                    </div>
                </section>

            </div >
        </div >
    )
}

export default Mobail
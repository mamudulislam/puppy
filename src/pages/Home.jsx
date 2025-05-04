import React from 'react'
import Banner from './Componentes/Banner/Banner'
import DogServices from './Componentes/Servise/DogServices'
import About from './About'
import Mobile from './Animation/Mobail'
import Productslid from './Productslid/Productslid'
import Features from './Features/Features'
import Appscreenshots from './Appscreenshots/Appscreenshots'
import Testimonial from './Testimonial/Testimonial'
import Download from './Download/Download'
const Home = () => {
    return (
        <div>
            <Banner />
            <DogServices />
            <About />
            <Mobile />
            <Productslid />
            <Features />
            <Appscreenshots />
            <Testimonial />
            <Download />
        </div>
    )
}

export default Home
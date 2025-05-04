import React from 'react'
import phone1 from '../../assets/Mobail/Mobile1.png'
import phone2 from '../../assets/Creenshots/phone23.png'
import phone3 from '../../assets/Creenshots/phone56.png'

const Appscreenshots = () => {
    return (
        <div className='container mx-auto'>
            <p className='font-Manjari font-medium text-[24px] text-center mb-2 '>Screenshots</p>
            <h2 className='font-Poppins font-semibold text-[30px] text-center mb-[95px]'>App Screenshots</h2>
            <div className='flex items-center justify-center gap-[25px] mb-[146px]'>
                <img src={phone2} alt="Phone img.........." />
                <img src={phone1} alt="Phone img.........." />
                <img src={phone3} alt="Phone img.........." />
            </div>
        </div >
    )
}

export default Appscreenshots
import React, { Children } from 'react'

const Globalcomponentes = ({ Children }) => {
    return (
        <div className='container mx-auto'>
            {Children}
        </div>
    )
}

export default Globalcomponentes
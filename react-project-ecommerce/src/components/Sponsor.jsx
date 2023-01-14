import React from 'react'
import { sponsors } from '../data/menus'

const Sponsor = () => {

    return (
        <div className='gap-4'>
            {sponsors.map((social, index) => (
                <img
                    src={social.img}
                    alt={social.id}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Sponsor
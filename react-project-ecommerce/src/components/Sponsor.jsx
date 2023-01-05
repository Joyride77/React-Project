import React from 'react'
import { sponsors } from '../data/menus'

const Sponsor = () => {

    return (
        <div className='gap-4'>
            {sponsors.map((social) => (
                <img
                    src={social.img}
                    alt={social.id}
                />
            ))}
        </div>
    )
}

export default Sponsor
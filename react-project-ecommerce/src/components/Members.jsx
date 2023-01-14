import React from 'react'
import { members } from '../data/menus'
import AliceCarousel from 'react-alice-carousel'

const Members = () => {
    const member = members.map((membersData, index) => {
        return (
            <div id="card" key={index}>
                {membersData.page.map((data, idx) => {
                    return (
                        <div key={`${index}${idx}`} className='row members p-3 d-flex align-items-center justify-content-center'>
                            <div className="row d-flex align-items-center justify-content-center mb-3 p-0">
                                <div className="col-5 d-flex align-items-center justify-content-center">
                                    <img src={data.img} alt={data.name} />
                                </div>
                                <div className="col">
                                    <h6>{data.name}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col px-0">
                                    <p>{data.data}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            <AliceCarousel disableButtonsControls="true">
                {member}
            </AliceCarousel>
        </div>
    )
}

export default Members
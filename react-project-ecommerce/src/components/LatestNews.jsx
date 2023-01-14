import React from 'react'
import { latestnews } from '../data/menus'
import AliceCarousel from 'react-alice-carousel'

const LatestNews = () => {
    const latest = latestnews.map((latestnewsData, index) => {
        return (
            <div id="card" key={index}>
                {latestnewsData.page.map((data, idx) => {
                    return (
                        <div key={`${index}${idx}`} className="row latest-news d-flex align-items-center justify-content-center">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col">
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <div className="col">
                                    <h6>{data.date}</h6>
                                    <h6 className='fw-bold'>{data.title}</h6>
                                    <p>{data.data}</p>
                                    <p className='mt-5'>{data.by}</p>
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
                {latest}
            </AliceCarousel>
        </div>
    )
}

export default LatestNews
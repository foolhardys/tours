import React, { useState } from 'react'

const Tours = ({ tours, removeTour }) => {

    const [readmore, setReadmore] = useState(false)
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    const { image, name, price, id, info, } = tour
                    return (
                        <article className='single-tour' key={id}>
                            <img src={image} alt={name} className='img' />
                            <span className='tour-price'>${price}</span>
                            <div className="tour-info">
                                <h5> {name} </h5>
                                <p> {readmore ? info : info.substring(0, 200)}
                                    <button
                                        type="button"
                                        className='info-btn '
                                        onClick={() => setReadmore(!readmore)}>
                                        {readmore? 'show less' : 'read more'}
                                    </button>
                                </p>
                                <button type="button" className='btn btn-block delete-btn' onClick={() => removeTour(id)}>
                                    not interested
                                </button>
                            </div>

                        </article>
                    )
                })}
            </div>
        </section >
    )
}

export default Tours
import { useState, useEffect } from 'react'
import useFetch from "../../hooks/useFetch.jsx"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Hotel({hotel}) {
    return (
        <>
            <div className='find--hotel--page'>
                <div className='second--div'>
                        <div className="single--hotel--div">
                            <div className="hotel--image">
                                <img src={hotel.photos  } alt="" />
                            </div>
                            <div className="more--selections">
                                <h1 className='hotel--name'>{hotel.name}</h1>
                                <p>City: {hotel.city}</p>
                                <p>Type: {hotel.type}</p>
                                <p>Description: {hotel.desc}</p>
                                <p>Cheapest price: {hotel.cheapestPrice}</p>
                                <p>Distance: {hotel.distance}</p>
                                <div className="available--days">
                                    <p>Not available</p>
                                </div>
                                <Link to={`/requestedPage/${hotel._id}`}> 
                                    <button>Book Now</button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}



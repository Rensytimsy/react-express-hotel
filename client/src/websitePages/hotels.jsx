import { useState, useEffect } from 'react'
import useFetch from "../../hooks/useFetch.jsx"
import SelectedHotel from './selectedhotel.jsx';

export default function Hotel() {

    const { data, error, loading } = useFetch("http://localhost:3000/api/hotel");
    // console.log(data);
    const [isClicked, setIsClicked] = useState(false);
    const clickedHotel = (e) => {
        setIsClicked((isClicked) => !isClicked);
    }

    console.log(isClicked);
    return (
        <>
            <div className='find--hotel--page'>
                <div className='first--div'>
                    <input type="search" placeholder='Search by location, price' />
                </div>
                <div className='second--div'>
                    {data.map((hotel, index) => (
                        <div className="single--hotel--div" key={index}>
                            <div className="hotel--image">
                                <img src={hotel.photos} alt="" />
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
                                <button onClick={clickedHotel}>Book Now</button>    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}



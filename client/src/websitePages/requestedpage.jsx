import React from 'react'
import useFetch from '../../hooks/useFetch.jsx'
import { useLocation } from 'react-router-dom'

export default function RequestedPage() {
  const location = useLocation();
  const hoteId = location.pathname.split("/")[2];

  const {data, loading, error} = useFetch(`http://localhost:3000/api/hotel/find/${hoteId}`);

  return (
    <div className='requested--page'>
          <div className="selected--hotel--page">
            <div className="selected--hotel--img">
              <img src={data.photos} alt="" />
              <p>{data.name}</p>
            </div>
          </div>
          <div className="selected--hotel--rooms">
            <div className="selected--room--card">
              <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="selected--room--details">
                <p>A studio room fully equiped</p>
                <p>At this room enjoy beautiful city views from the balcony</p>
                <p>Has got a king size bed</p>
                <p>Hot shower</p>
                <p>Free high wireless internet speeds</p>
                <p>Price: $120 usd</p>
                <button>Book this room</button>
              </div>
            </div>
            <div className="selected--room--card">
              <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="selected--room--details">
                <p>A studio room fully equiped</p>
                <p>At this room enjoy beautiful city views from the balcony</p>
                <p>Has got a king size bed</p>
                <p>Hot shower</p>
                <p>Free high wireless internet speeds</p>
                <p>Price: $120 usd</p>
                <button>Book this room</button>
              </div>
            </div>
            <div className="selected--room--card">
              <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="selected--room--details">
                <p>A studio room fully equiped</p>
                <p>At this room enjoy beautiful city views from the balcony</p>
                <p>Has got a king size bed</p>
                <p>Hot shower</p>
                <p>Free high wireless internet speeds</p>
                <p>Price: ${data.cheapestPrice} usd</p>
                <button>Book this room</button>
              </div>
            </div>
          </div>
          <div className="hotel--description">
            <p className='hotel--mission'>Our Mission</p>
            <p>
            At {data.name}, our mission is to provide an exceptional guest experience that blends luxury, comfort, and personalized service. We strive to create a welcoming atmosphere where every visitor feels at home, while offering world-class amenities and services that cater to both relaxation and adventure.

            Our goal is to exceed the expectations of our guests by delivering memorable stays, fostering a commitment to sustainability, and maintaining the highest standards of hospitality. We aim to be the preferred destination for travelers seeking not only accommodation but an immersive experience that reflects the beauty and culture of our surroundings.
            </p>
          </div>
    </div>
  )
}

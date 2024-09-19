import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch.jsx'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SelectedRoom from './selectedRoom.jsx';
// import { set } from 'mongoose';

export default function RequestedPage() {
  const location = useLocation();
  const hoteId = location.pathname.split("/")[2];

  const [isBooked, setIsBooked] = useState(false);
  const handleClick = () => {
    setIsBooked((isBooked) => !isBooked);
  }

  const { data, loading, error } = useFetch(`http://localhost:3000/api/hotel/find/${hoteId}`);
  // console.log(data.rooms)
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRooms = async () => {
      const res = await axios.get(`http://localhost:3000/api/hotelRoom/${hoteId}`);
      setRooms(res.data)
    }
    getRooms();
  }, [rooms.id]);


  return (
    <div className='requested--page'>
      <div className="selected--hotel--page">
        <div className="selected--hotel--img">
          <img src={data.photos} alt="" />
          <p>{data.name}</p>
        </div>
      </div>
      <div className="selected--hotel--rooms">
        {loading ? "Loading please wait..." :
          rooms.map((room, index) => (
            <div className="selected--room--card" key={index}>
              <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="selected--room--details">
                <p>{room.title}</p>
                <p>{room.desc}</p>
                <p>MaxPeople {room.maxPeople}</p>
                <p>Price  ${room.price} usd</p>
              </div>
              <Link to={`/selectedRoom/${room._id}`}>
                <button onClick={handleClick}>Book now</button> 
              </Link>
            </div>
          ))
          }
          {isBooked ? <SelectedRoom /> : ""}
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

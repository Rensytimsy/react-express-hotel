import { useState } from "react";
import "../../styleSheets/hotel.css"
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import SelectedRoom from "./selectedRoom";


export default function RoomsModal({isReserved, roomNumbers, roomPrice}){
    const [closeModal, setCloseModal] = useState(isReserved);

    const handleReserve = () =>  {
        setCloseModal(!closeModal);
    }

    const [bookedRooms, setBookedRooms] = useState(
        roomNumbers.map(room => ({
          number: room.number,
          isBooked: false,
        }))
    )

    const handleRoomBooking = (roomNumber) => {
        setBookedRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.number === roomNumber ? { ...room, isBooked: !room.isBooked } : room
          )
        );
      };

    return(
        <>
          <div className={closeModal ? "room--modal--true" : "room--modal--false"}>
            <div className="top--layer">
                <button onClick={handleReserve}><CloseTwoToneIcon
                    sx={{ border:"none", fontSize: "25px"}}
                /></button>
            </div>
            <div className="rest--layer">
                {roomNumbers?.map((number, index) => (
                    <div className="room--number" key={index}>
                        <div className="first--div--reserve">
                        <p className="room--number--number">Number ({number.number})</p>
                        <div className="is--available">
                            {/* <p>{bookedRooms ? "Available" : "Room booked!"} <br />2024-09-17 to 2024-09-24</p> */}
                            <p>{bookedRooms.find(room => room.number === number.number)?.isBooked ? "Room booked!" : "Available"}</p>
                            <p>2024-09-17 to 2024-09-24</p>
                        </div>
                        <button onClick={() => handleRoomBooking(number.number)}>Reserve Room {number.number}</button>
                        </div>
                        <div className="room--reserve--details">
                            <div className="days"><p className="day">One day</p>   <p className="price--day">$ {roomPrice * 1} Usd</p></div>
                            <div className="days"><p className="day">Two days</p>  <p className="price--day">$ {roomPrice * 2} Usd</p></div>
                            <div className="days"><p className="day">Three days</p>    <p className="price--day">$ {roomPrice * 3} Usd</p></div>
                            <div className="days"><p className="day">Four days</p> <p className="price--day">$ {roomPrice * 4} Usd</p></div>
                            <div className="days"><p className="day">Five days</p> <p className="price--day">$ {roomPrice * 5} Usd</p></div>
                            <div className="days"><p className="day">One Week</p>  <p className="price--day">$ {roomPrice * 7} Usd</p></div>
                            <div className="days"><p className="day">One Month</p> <p className="price--day">$ {roomPrice * 30} Usd</p></div>

                        </div>
                    </div>
                ))}
            </div>
          </div>
        </>
    )
}
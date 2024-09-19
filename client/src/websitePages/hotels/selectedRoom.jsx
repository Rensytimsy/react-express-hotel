import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RoomsModal from "./roomsModal";



export default function SelectedRoom() {
    const location = useLocation();
    const roomId = location.pathname.split("/")[2];
    // console.log(roomId);
    const { data, error, loading } = useFetch(`http://localhost:3000/api/room/${roomId}`);
    const [reserve, setReserve] = useState(false);

    const handleReserve = () => {
        setReserve(!reserve);
    }

    // console.log(reserve)

    const { photos } = data;
    return (
        <>
            <div className="selected--room">
                <div className="sign--in--date">
                    <input type="date" />
                    <input type="date" />
                </div>
                <div className="room--details">
                    <p>{data.title}</p>
                    <div className="room--images">
                        {loading ? "Loading please wait" : photos?.map((image, key) => (<img src={image} key={key} className="room--photos" />))}
                    </div>
                </div>
            </div>
            <div className="rooms--more">
                <p>Price ${data.price}</p>
                <button onClick={handleReserve}>Reserve</button>
            </div>
            {reserve ? <RoomsModal isReserved={reserve} roomNumbers={data.roomNumbers} roomPrice={data.price}/> : "..."}
        </>
    )
}
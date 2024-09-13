import react from "react";
import "../styleSheets/hotel.css"

export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="colums">
                    <h1>Reach to us via:</h1>
                    <p>travelhotel@gmail.com</p>
                    <p>Line: +254790337192</p>
                    <p>Instagram: TravelHotelGlobal</p>
                    <p>FaceBook: TravelHotelGlobal</p>
                    <p>Twitter: travelhotelglobal</p>
                </div>
                <div className="colums">
                    <h1>Located at</h1>
                    <p>Nairobi, Kenya</p>
                    <p>kiambu</p>
                    <p>Office number 06</p>
                </div>
                <div className="colums">
                    <h1>Developed By</h1>
                    <p>Founder: Timothy Mutwiri</p>
                    <p>Co-founder: Joseph</p>
                    <p>Copyright@travelhotelglobal:2024</p>
                </div>
            </div>
        </>
    )
}
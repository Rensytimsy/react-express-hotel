import react, { useState } from "react"
import "../../styleSheets/hotel.css";
import axios from "axios";

export default function UserRegister(){

    const [userData, setData] = useState({username: "", userEmail: "", userPassword: ""});
    const handleClick = async () => {
        try{
        const sendUserData = await axios.post("api/auth/register", userData);
        console.log(sendUserData)
        }catch (err){
            console.log(err);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setData({
            ...userData,
            [name] : value
        });
    }


    console.log(userData);

    return (
        <>
          <div className="main--login--page">
            <div className="login--form--wrapper">
                    <h1>Create Account</h1>
                    <div className="login--fields">
                        <input 
                        type="text"
                        name="username" 
                        placeholder="User name"
                        id="username"
                        onChange={handleChange}
                        />
                        <br />
                        <input 
                        type="text" 
                        name="userEmail" 
                        placeholder="User Email"
                        id="userEmail"
                        onChange={handleChange}
                        />
                        <br />
                        <input 
                        type="text" 
                        name="userPassword" 
                        placeholder="User Password"
                        id="userPassword"
                        onChange={handleChange}
                        />
                        <br />
                        <button className="submit--button" onClick={handleClick}>Register</button>
                    </div>
            </div>
            <div className="login--description">
                    <h1 className="login--header--text">Welcome to Travell Hotel Global! 🌟</h1>
                    <p>We’re thrilled to have you join our global community of travelers! By creating your account, you're unlocking a world of endless travel possibilities and exclusive perks.</p>
                    <h1 className="login--header--text">As a member, you’ll enjoy</h1>
                    <p>🏨 Special Rates and Offers: Access member-only discounts on top hotels worldwide.</p>
                    <br />
                    <p>🌍 Personalized Travel Suggestions: Discover destinations and hotels based on your preferences.</p>
                    <br />
                    <p>💼 Effortless Booking Management: Keep track of your bookings with ease.</p>
                    <br />
                    <p>
                        Let’s get started on your next adventure. Sign up today and make your travels smoother, smarter, and more enjoyable with Travell Hotel Global.
                    </p>
            </div>
          </div>
        </>
    )
}

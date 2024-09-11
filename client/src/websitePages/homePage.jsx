import react from "react";
import Box from "@mui/material/Box";
import "../styleSheets/home-page.css";
import NavBar from "../websitePages/nav.jsx";
import AboutPage from "./about.jsx";
import { Button, Card, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import "../styleSheets/home-page.css"
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import TourIcon from '@mui/icons-material/Tour';
import Footer from "./footer.jsx";


export default function HomePage(){
    return (
        <>
            <div className="landing--page">
               <div className="user--name">
                <p>Test User</p>
               </div>
               <div className="more--contents">
                <div className="content">
                   <ConnectingAirportsIcon sx={{width: "100px", height: "50px"}}></ConnectingAirportsIcon>
                   <p className="content--text">Travell</p>
                </div>
                <div className="content">
                    <TourIcon sx={{width: "100px", height: "50px"}}></TourIcon>
                    <p className="content--text">Tourism</p>
                </div>
                <div className="content">
                    <EmojiNatureIcon sx={{width: "100px", height: "50px"}}></EmojiNatureIcon>
                    <p className="content--text">Nature</p>
                </div>
               </div>

               <div className="website--search--bar">
                    <input type="search" placeholder="What are you looking for? search by name, city, price"/>
               </div>
            </div>
            <div className="card--cover">
            <h1>Hotels Scenerical: </h1>
                <div className="hotels--feel">
                        <div className="hotels--card">
                            <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="an image" />
                            <p>Coastal hotels: 20</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://media.istockphoto.com/id/1400989622/photo/wooden-chalet-in-swiss-alps.jpg?s=1024x1024&w=is&k=20&c=TBYT9ifv9Welupqixad9XUbVVbK2XsVD_g1hpNpC2KE=" alt="an image" />
                            <p>Coastal hotels: 20</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://www.wandersmiles.com/wp-content/uploads/2020/05/nargakot-hotel-mystic-mountain-nepal.jpg" alt="an image" />
                            <p>Coastal hotels: 20</p>
                        </div>
                </div>
               </div>
               <div className="card--cover">
                <h1>Hotels in: </h1>
                    <div className="hotels--selections">
                        <div className="hotels--card">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/391233457.jpg?k=99ab0fb976d58ff015120f1633ec6cb8446e99d4ca546356697c8ed6b5278d47&o=&hp=1" alt="" />
                            <p>Apartment Hotels</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/507295711.jpg?k=5bb9c4e5a4f329928c18c374b619034dc87ebee3ebf6201aec1b96fc7735e925&o=&hp=1" alt="" />
                            <p>Apartment Hotels</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490178393.jpg?k=c37ad91f9cb766385cff99cd4932043515857dc71e461a208039f2a5226d982b&o=&hp=1" alt="" />
                            <p>Apartment Hotels</p>
                        </div>
                    </div>
               </div>
               <AboutPage />
        </>
    )
}
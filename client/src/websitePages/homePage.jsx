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
import FeaturedSection from "./featured.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import TopCities from "./topCities.jsx";
import HotelType from "./hotelType.jsx";


export default function HomePage() {

    return (
        <>
            <div className="landing--page">
                <div className="user--name">
                    <p>Test User</p>
                </div>
                <div className="more--contents">
                    <div className="content">
                        <ConnectingAirportsIcon sx={{ width: "100px", height: "50px" }}></ConnectingAirportsIcon>
                        <p className="content--text">Travell</p>
                    </div>
                    <div className="content">
                        <TourIcon sx={{ width: "100px", height: "50px" }}></TourIcon>
                        <p className="content--text">Tourism</p>
                    </div>
                    <div className="content">
                        <EmojiNatureIcon sx={{ width: "100px", height: "50px" }}></EmojiNatureIcon>
                        <p className="content--text">Nature</p>
                    </div>
                </div>

                <div className="website--search--bar">
                    <input type="search" placeholder="What are you looking for? search by name, city, price" />
                </div>
            </div>
                <TopCities />
                <HotelType />
                <AboutPage />
                <FeaturedSection />
        </>
    )
}
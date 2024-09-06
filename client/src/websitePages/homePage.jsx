import react from "react";
import Box from "@mui/material/Box";
import "../styleSheets/home-page.css";
import NavBar from "../websitePages/nav.jsx";
import AboutPage from "./about.jsx";


export default function HomePage(){
    return (
        <>
            <Box width="95%" height="100vh" sx={{
                 padding: "0px ",
                 display: "flex",
                 flexDirection: "row"
                 }}>
                <Box width="100%"
                sx={{
                    width: "100%",
                    position: "relative",
                    top: "10%"
                }}
                >
                    <img src="/hotel image.png" alt="" className="homepage--image"/>
                </Box>
                <Box sx={{
                    width: "80%",
                    position: "relative",
                    top: "10%",
                    left: "10px",   
                    textAlign: "center"
                }}>
                    <p className="Welcome--header">Welcome to Travel Hotel Global🌍</p>
                    <p className="Welcome--text">At Travel Hotel, we make discovering the perfect hotel anywhere in the world easy and enjoyable! Whether you're planning a quick getaway, a family vacation, or a business trip, our platform is designed to help you find the best accommodations that suit your needs, preferences, and budget.</p>
                    <p className="Welcome--header">Plan Your Perfect Stay</p>
                    <p className="Welcome--text">Simply search by location or browse our curated collections of top-rated hotels. Filter by amenities like free Wi-Fi, breakfast, or pet-friendly options. Whether you're seeking luxury, comfort, or affordability, Travel Hotel has something for everyone.
                    Let us help you discover your next destination and make your hotel booking experience hassle-free!

                    Start exploring now and find your dream hotel at Travel Hotel!
                    </p>
                </Box>
            </Box>
            <AboutPage />
        </>
    )
}
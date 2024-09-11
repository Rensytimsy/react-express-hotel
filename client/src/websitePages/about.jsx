import react from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import NavBar from "../websitePages/nav.jsx"
import "../styleSheets/home-page.css";
import Footer from "./footer.jsx";
import "../styleSheets/home-page.css"
export default function AboutPage() {
    return (
        <>
            <div className="about--us">
                <h1>About us</h1>
                <div className="about--us--content">
                    <p>Welcome to Travel Hotel, your ultimate gateway to discovering and booking the perfect stay, no matter where your travels take you. Whether you're planning a relaxing getaway, an adventurous trip, or a business journey, Travel Hotel is here to make finding the right accommodation effortless and enjoyable.</p>
                    <p>We connect travelers with a vast selection of hotels across the globe, from luxurious resorts to budget-friendly stays, all tailored to suit your unique preferences. Our user-friendly platform allows you to explore hotels in any destination, compare prices, read genuine reviews, and book with confidence.</p>
                    <p>At Travel Hotel, we believe that where you stay is just as important as where you go. That's why we provide detailed information, vibrant images, and all the amenities you need to make an informed decision. With our extensive network, you’re never far from your next memorable experience.</p>
                    <p>Start your journey with Travel Hotel today, and let us help you find the perfect place to stay, wherever the world may take you!</p>
                </div>
            </div>
        </>
    )
}
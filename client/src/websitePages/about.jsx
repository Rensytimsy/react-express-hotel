import react from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import NavBar from "../websitePages/nav.jsx"


import "../styleSheets/home-page.css"
export default function AboutPage() {
    return (
        <>
            <Box typography='body1'>
                <Box sx={{margin: "10px 0"}}>
                    <Typography variant="h4" sx={{margin: "10px 30px", fontWeight: "600"}}>
                        What we do
                    </Typography>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                         <p className="about--intro">At Travel Hotel, we specialize in helping travelers find the perfect hotel, no matter where in the world they are headed. Our mission is to simplify the process of hotel discovery and booking by offering a seamless, user-friendly platform that connects you to accommodations that match your travel style and budget.</p>
                    </Typography>
                    <Box sx={{display: "flex", flexDirection:"row", margin: "0 50px"}}>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Global Hotel Search
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                From bustling cities to tranquil retreats, we give you access to thousands of hotels across every continent. Simply search by city, country, or region, and explore a range of options that suit your preferences.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Tailored Recommendations
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                            We understand that every traveler is unique. That’s why we offer personalized recommendations based on your location, budget, and specific needs like family-friendly hotels, romantic getaways, or business stays.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Filter and Compare
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                Need a hotel with free breakfast, Wi-Fi, or a spa? Our easy-to-use filters let you narrow down your search by amenities, price, star ratings, and more. Compare hotels side by side to find the one that best fits your requirements.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Easy Booking
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                Once you've found the perfect hotel, you can book directly through our platform. Our streamlined booking process ensures that you can reserve your room with just a few clicks, saving you time and hassle.
                            </Typography>
                        </Box>

                    </Box>
                </Box>


                <Box>
                    <Typography variant="h4" sx={{margin: "10px 30px", fontWeight: "600"}}>
                        How We Do It at Travel Hotel Global
                    </Typography>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                         <p className="about--intro">Our goal is to make hotel booking simple, efficient, and tailored to your needs—no matter where in the world you want to stay. Our platform connects you to thousands of hotels across the globe using cutting-edge technology and a customer-first approach to ensure that your experience is smooth from start to finish.</p>
                    </Typography>
                    <Box sx={{display: "flex", flexDirection:"row", margin: "0 50px"}}>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Extensive Hotel Network
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                We partner with hotels of all types—from luxury resorts to boutique inns and budget-friendly accommodations. Our vast network spans major cities, remote getaways, and everything in between, giving you access to a world of choices no matter where your travels take you.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Powerful Search Engine
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                Our advanced search engine allows you to quickly and easily find hotels based on your destination, preferred dates, and specific requirements. Whether you’re looking for a five-star experience, family-friendly stays, or a quiet retreat, you can search by location, price range, amenities, and more.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Real-Time Updates
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                Our platform provides real-time updates on room availability, pricing, and special deals. We constantly refresh our data to ensure you have access to the most up-to-date information, helping you make the best decision quickly and easily.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Global Support
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                Whether you're booking a hotel for a weekend getaway or a long vacation, our support team is always ready to assist. We offer customer service across multiple time zones and languages to ensure that any issues or questions are resolved quickly.
                            </Typography>
                        </Box>

                    </Box>
                </Box>


                <Box sx={{margin: "60px 0"}}>
                    <Typography variant="h4" sx={{margin: "10px 30px", fontWeight: "600"}}>
                        Our Mission at Travel Hotel Global
                    </Typography>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                         <p className="about--intro">Our goal is to make hotel booking simple, efficient, and tailored to your needs—no matter where in the world you want to stay. Our platform connects you to thousands of hotels across the globe using cutting-edge technology and a customer-first approach to ensure that your experience is smooth from start to finish.</p>
                    </Typography>
                    <Box sx={{display: "flex", flexDirection:"row", margin: "0 50px"}}>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Global Accessibility
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                We aim to bridge the gap between travelers and hotels across the globe. By offering a wide selection of accommodations from every corner of the world, we empower travelers to explore new destinations with confidence and ease.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Trust and Transparency
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                We believe in providing honest and transparent information. Our platform features verified guest reviews, accurate pricing, and up-to-date room availability, so travelers can make informed decisions with complete confidence.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Personalized Recommendations At Travel Hotel
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                we understand that no two travelers are the same. That’s why we’re committed to offering personalized hotel recommendations that reflect each user’s unique needs—whether you're seeking luxury, adventure, relaxation, or affordability.
                            </Typography>
                        </Box>
                        <Box sx={{width:"20%", height:"300px",margin: "10px 20px", border: "1px solid #dadada", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,1)"}}>
                            <Typography variant="h6" sx={{fontWeight:"600", textDecoration: "underline", textAlign: "center"}}>
                                Connecting People to Experiences
                            </Typography>
                            <Typography variant="p" sx={{position:"relative", top: "20px", width:"0", lineHeight: "1.5", fontSize: "18px"}}>
                                More than just a hotel booking platform, we see ourselves as facilitators of memorable experiences. We help travelers find the right accommodations to enhance their journeys, ensuring that their stay is comfortable, enjoyable, and unforgettable.
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button"
import NavBar from "./websitePages/nav.jsx"
import HomePage from "../src/websitePages/homePage.jsx"
import AboutPage from "../src/websitePages/about.jsx"
import {Route, Routes} from "react-router-dom"
import HotelPage from "../src/websitePages/hotels.jsx"
import RequestedPage from "./websitePages/requestedpage.jsx";
import Footer from "./websitePages/footer.jsx";
import UserLogin from "./websitePages/userAuthPages/login.jsx";
import UserRegister from "./websitePages/userAuthPages/register.jsx";
import SelectedRoom from "./websitePages/selectedRoom.jsx";

export default function App(){


  return(
    <>    
      <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about_us" element={<AboutPage />}/>
            <Route path="/requestedPage/:id" element={<RequestedPage />}/>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserRegister />} />
            <Route path="/selectedRoom/:id" element={<SelectedRoom />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}
import react from "react"
import Box from "@mui/material/Box"
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useState } from "react";

import AboutPage from "./about.jsx"
import ContactPage from "./contact.jsx"
import HomePage from "./homePage.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import "../styleSheets/home-page.css"

export default function Nav(){

    const [value, setvalue] = useState("1");

    const handleChange = (event, newValue) => {
        setvalue(newValue);
    }

    return(
        <div className="nav--bar">
            <div className="logo">
                <h1>THG</h1>
            </div>
            <div className="nav--lists">
                <li><Link to="/" className="a--tag">Home</Link></li>
                <li><Link to="/about_us">About us</Link></li>
                <li className="login--button"><Link to="/login">Login</Link></li>
                <li className="register--button"><Link to="/signup">Sign Up</Link></li>
            </div>
        </div>
    )
}
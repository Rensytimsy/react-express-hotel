import react from "react";
import Box from "@mui/material/Box";
import "../styleSheets/home-page.css";
import NavBar from "../websitePages/nav.jsx";
import AboutPage from "./about.jsx";
import { Button, Card, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import "../styleSheets/home-page.css"

export default function HomePage(){
    return (
        <>
            <div className="landing--page">
                <Card>
                    <Typography>
                        Iam a user
                    </Typography>
                    <Card>
                        <Typography>
                            Welcome to Travell Hotel Global
                        </Typography>
                        <Typography>
                            Anything you are looking for is in plenty
                        </Typography>
                        <Card>
                            <Button variant="contained">Login/Register</Button>
                        </Card>
                    </Card>
                </Card>
            </div>
       
        </>
    )
}
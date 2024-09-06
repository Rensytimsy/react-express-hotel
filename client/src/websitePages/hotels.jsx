import {useState, useEffect} from 'react'
import axios from "axios"
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    Button
} from "@mui/material";

import {Favorite, Share} from "@mui/icons-material"

import "../styleSheets/hotel.css"
import RequestedPage from './requestedpage';

export default function Hotel() {

    const [hotelData, setHotelData] = useState([]);
    const [isClicked, setIsClicked] = useState(true);
    const [welcomeData, setWelcomeData] = useState([]);
    //We fetch data from our apis.
    const fetchWelcomeData = async() => {
        const response = await axios.get("http://localhost:3000/api");
        // console.log(response.data)
        setWelcomeData(response.data)
    }


    const fetchData = async() => {
        const response = await axios.get("http://localhost:3000/api/hotels");
        console.log(response.data.hotelsData);
        setHotelData(response.data.hotelsData)
    }

    useEffect(() => {
        fetchData();
        fetchWelcomeData();
    }, []);

    const changeColor = (e) => {
        return setIsClicked(isClicked => !isClicked);
    }
    console.log(isClicked);

  return (
    <div>
        <div className="welcome--display">
                <img src={welcomeData.image} alt="" className='welcome--image'/>
                <p className='welcome--text'>{welcomeData.info}</p>
                <input type='search'  className='search--input' placeholder='Search hotel By name / Country name'/>
        </div>
        <div className="hotel--data">
            {hotelData.map((hoteldata, hotelKey) => (
                <Card key={hotelKey}
                    sx={{position: "relative", left: "5%", margin: "5px 3%", maxWidth: 700}}
                >
                    <img src={hoteldata.hotel_image} alt='An hotel image' className='hotels--images'/>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component="div" sx={{color: "#000"}}>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        {hoteldata.hotelname}
                        </Typography>
                        <Typography variant='body2' sx={{color: "text.secondary", width: "100%"}}>
                            {hoteldata.hotels_description}
                        </Typography>
                    </CardContent>
                    <div className="bottom--cards">
                    <CardActions>
                        <Button size="small" color="info" variant="contained"><a href="/requestedPage">See more</a></Button>
                    </CardActions>
                    <CardActions sx={{margin: "0 50px"}}>
                        <Favorite className={isClicked ? "buttonClicked" : "buttonNotClicked"} onClick={changeColor}/>
                        <Share />
                    </CardActions>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  )
}



import {useState} from "react";
import { useLocation } from "react-router-dom";
import "../styleSheets/home-page.css";
import AboutPage from "./about.jsx";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import TourIcon from '@mui/icons-material/Tour';
import FeaturedSection from "../websitePages/hotels/featured.jsx"
import useFetch from "../../hooks/useFetch.jsx";
import TopCities from "./topCities.jsx";
import HotelType from "../websitePages/hotels/hotelType.jsx"
// import { format } from "date-fns";
// import {DateRange} from "react-date-range";
import RequestedPage from "../websitePages/hotels/requestedpage.jsx";
import Hotel from "../websitePages/hotels/hotels.jsx";
import { Link } from "react-router-dom";

export default function HomePage() {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination || "");
    const [date, setDate] = useState([new Date()]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options || {});


    const {data, error, loading} = useFetch(`http://localhost:3000/api/hotel?city=${destination}`);
    // console.log(location)

    return (
        <>
            <div className="landing--page">
                <div className="user--name">
                    <p>Test User</p>
                </div>
                <div className="website--search--bar">
                    <input
                     type="search"
                     placeholder="Search location here...We got it all"
                     onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>

                {data.map((hotel) => (
                    <>
                        <Hotel hotel={hotel} key={hotel._id}/>
                    </>
                ))
                }

                <TopCities />
                <HotelType />
                <AboutPage />
                <FeaturedSection />
        </>
    )
}
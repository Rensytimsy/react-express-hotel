import "../../styleSheets/hotel.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState, useEffect } from "react";

export default function SelectedContinent() {
  const location = useLocation();
  const continentPath = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`http://localhost:3000/api/continentsworld?continent=${continentPath}`);

  const [place, setPlace] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (place) {
      const filteredHotels = data.filter((hotel) => {
        return (
          (hotel.name && hotel.name.toLowerCase().includes(place.toLowerCase())) ||
          (hotel.city && hotel.city.toLowerCase().includes(place.toLowerCase())) ||
          (hotel.location && hotel.location.toLowerCase().includes(place.toLowerCase()))
        );
      });
      setFilteredData(filteredHotels);
    } else {
      setFilteredData(data);
    }
  }, [place, data]);

  return (
    <>
      <div className="selected--continent">
        <div className="top--bar">
          <p>{continentPath}</p>
          <div className="search--in--continent">
            <input
              type="search"
              placeholder={`Search For Hotels in ${continentPath}`}
              value={place}
              onChange={(e) => setPlace(e.target.value)} // Update the search term
            />
          </div>
        </div>
        <div className="all--hotels">
          {loading ? (
            "Loading please wait"
          ) : filteredData.length > 0 ? (
            filteredData.map((hotel) => (
              <div className="continent--hotels" key={hotel._id}>
                <div className="single--hotel--continent">
                  <div className="hotel--image--continent">
                    <img src={hotel.photos} alt="" />
                  </div>
                  <div className="more--selections--continent">
                    <h1 className="hotel--name">{hotel.name}</h1>
                    <p>City: {hotel.city}</p>
                    <p>Location: {hotel.location}</p>
                    <p>Type: {hotel.type}</p>
                    <p>Description: {hotel.desc}</p>
                    <p>Cheapest price: {hotel.cheapestPrice}</p>
                    <p>Distance: {hotel.distance}</p>
                    <p className="hotel--rating">Rating: {hotel.rating}/5</p>
                    <Link to={`/requestedPage/${hotel._id}`}>
                      <button>Visit Hotel</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hotels in such current locations</p>
          )}
        </div>
      </div>
    </>
  );
}

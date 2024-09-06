import express from "express";
import hotelsData from "../apisDocuments/hotelsData.js"

const apiRouters = express.Router();

apiRouters.get("/api", (req, res) => {
    res.json({
        "image": "https://images.pexels.com/photos/1266832/pexels-photo-1266832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "info": "Search for Hotels all over the world . Find the One that you like and enjoy your trips"
    })
});


apiRouters.get("/api/hotels", (req, res) => {
    res.json({
        hotelsData
    });
})



export default apiRouters;
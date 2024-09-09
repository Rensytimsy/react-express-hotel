import express from "express";

import {
     getHotels,
     getSpecificHotel,
     createHotel,
     deleteHotel,
     updateHotel
     } from "../controllers/hotelController.js";

const router = express.Router();


//Creating a hotel.
router.post("/hotel", createHotel);

//Updating a hotel
router.put("/hotel/:id", updateHotel);

//Deleting a hotel
router.delete("/hotel/:id", deleteHotel);

//Get a specific hotel.
router.get("/hotel/:id", getSpecificHotel);
//Get all hotels present
router.get("/hotel", getHotels);

export default router;
import express from "express";

import {
     getHotels,
     getSpecificHotel,
     createHotel,
     deleteHotel,
     updateHotel,
     getHotelCount,
     getByType,
     getContinent,
     hotelRooms,
     getByContinent
     } from "../controllers/hotelController.js";

import {
     verifyToken,
     verifyUser,
     verifyAdmin 
     } from "../utils/verifyToken.js";
import { get } from "mongoose";
const router = express.Router();


//Creating a hotel.
router.post("/hotel", verifyAdmin,createHotel);

//Updating a hotel
router.put("/hotel/find/:id", verifyAdmin, updateHotel);

//Deleting a hotel
router.delete("/hotel/find/:id", verifyAdmin, deleteHotel);

//Get a specific hotel.
router.get("/hotel/find/:id", getSpecificHotel);

//Get all hotels present
router.get("/hotel", getHotels);

//Get hotels by search
router.get("/countCities", getHotelCount)

router.get("/byType", getByType);

//Find by continent
router.get("/continent", getContinent);

//Get hotel rooms
router.get("/hotelRoom/:id", hotelRooms);
//Get hotel by continent

router.get("/continentsworld", getByContinent)

export default router;
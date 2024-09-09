import express from "express";

import {
     getHotels,
     getSpecificHotel,
     createHotel,
     deleteHotel,
     updateHotel
     } from "../controllers/hotelController.js";

import {
     verifyToken,
     verifyUser,
     verifyAdmin 
     } from "../utils/verifyToken.js";
const router = express.Router();


//Creating a hotel.
router.post("/hotel", verifyAdmin,createHotel);

//Updating a hotel
router.put("/hotel/:id", verifyAdmin, updateHotel);

//Deleting a hotel
router.delete("/hotel/:id", verifyAdmin, deleteHotel);

//Get a specific hotel.
router.get("/hotel/:id", getSpecificHotel);

//Get all hotels present
router.get("/hotel", getHotels);

export default router;
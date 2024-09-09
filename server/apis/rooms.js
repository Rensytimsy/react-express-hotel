import express from "express";

import {createRoom, getRooms, updateRoom, deleteRoom, getRoom} from "../controllers/roomsController.js";
//User authentication and authorization route
import {
    verifyToken,
    verifyUser,
    verifyAdmin 
    } from "../utils/verifyToken.js";
const router = express.Router();

//Create a HotelRoom
router.post("/createRoom", verifyAdmin, createRoom);

//Get all Rooms present
router.get("/rooms", getRooms);

//Update a specific room
router.put("/updateRoom/:id", verifyAdmin, updateRoom);

//Delete a specific room
router.delete("/deleteRoom/:id", verifyAdmin, deleteRoom);

//Get a specific room
router.get("/room/:id", getRoom);

export default router;
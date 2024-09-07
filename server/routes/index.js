import express from "express";
import UsersRouter from "../apis/users.js";
import HotelsRouter from "../apis/hotels.js";
import RoomsRouter from "../apis/rooms.js";


const router = express.Router();

router.use("/api", UsersRouter);
router.use("/api", HotelsRouter);
router.use("/api", RoomsRouter);

export default router;
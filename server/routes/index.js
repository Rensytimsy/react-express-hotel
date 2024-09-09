import express from "express";
import HotelsRouter from "../apis/hotels.js";
import RoomsRouter from "../apis/rooms.js";
import userRouter from "../apis/auth.js"


const router = express.Router();

router.use("/api", HotelsRouter);
router.use("/api", RoomsRouter);
router.use("/api/auth", userRouter);

export default router;
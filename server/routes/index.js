import express from "express";
import apiRouters from "../apis/hotelData";

const router = express.Router();
router.use(apiRouters);

export default router;
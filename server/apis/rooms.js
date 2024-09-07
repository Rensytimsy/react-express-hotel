import express from "express";

const router = express.Router();

router.get("/room", (req, res) => {
    res.send("This the room end point");
});

export default router;
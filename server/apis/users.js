import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("This the users end point");
});

export default router;
import express from "express";
import {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} from "../controllers/authController.js";

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a user/ register.
router.post("/register", registerUser);

//User login endpoint
router.post("/login", loginUser);

//Updating users
router.put("/user/:id", updateUser);

//Delete users
router.delete("/user/:id", deleteUser);

//Get a specific user
router.get("/user/:id", getUser);

//Get all users
router.get("/users", getAllUsers);

export default router;

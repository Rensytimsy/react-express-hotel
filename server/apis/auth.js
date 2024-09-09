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

//The code below are for testing the jwtauthentication and isAdmin functionalities you can uncomment them to test the endpoints

// router.get("/userauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user you are authenticated.");
// });

// router.get("/isauthorised/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user you are authenticated you can delete your account");
// });

// router.get("/isAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin you are authenticated.in sudo mode!");
// });

//Create a user/ register.
router.post("/register", registerUser);

//User login endpoint
router.post("/login", loginUser);

//Updating users
router.put("/user/:id", verifyUser, updateUser);

//Delete users
router.delete("/user/:id", verifyUser, deleteUser);

//Get a specific user
router.get("/user/:id", verifyUser, getUser);

//Get all users
router.get("/user", verifyAdmin, getAllUsers);

export default router;

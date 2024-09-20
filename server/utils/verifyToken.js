import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


//First step is Verifying the token provided for a specific user.
export const verifyToken = function(req, res, next){
    const userToken = req.cookies.token;
    if(!userToken) return next(createError(403, "Invalid user token!"));
    //The code above makes sure that there must be a userToken provided if not an error will be sent.
    //After the token is present we can check if it is verified.
    //jwt.verify takes two parameters token provided in the key and a random generated sequence of characters and numbers as jwt key.
    jwt.verify(userToken, process.env.JWT_KEY, (err, user) => {
        //Now at this point userToken will get verified by jwt. And if not we will return an error.
        if (err) return next(createError(401, "Token not valid!"));
        req.user = user;
        next();
    });
}


//This funcxtionality is for all logged in users who are not also admins.
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, err => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            return next();
        }else{
            return next(createError(403, "You are not authorised!"));
        }
    });
}

//Makes sure only the admin are verified for sudo functionalities.
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, err => {
        if (req.user.isAdmin){
            return next();
        }else{
            return next(createError(403, "You are not an Admin therefore not authorised!"));
        }
    });
}
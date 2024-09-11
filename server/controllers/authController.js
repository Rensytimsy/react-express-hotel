import userSchema from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js" //CreateError takes two parameter statusCode and error message.
import jwt from "jsonwebtoken";


//Create new User/Register
export const registerUser = async(req, res, next) => {
    try{
        const newUser = new userSchema(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    }catch (err) {
        next(err);
    }
}

//User login
export const loginUser = async(req, res, next) => {
    try{
        const avalilableuser = await userSchema.findOne({name: req.body.name});
        if(!avalilableuser) return next(createError(404, "Invalid User name!"));

        //Below is the userSchema.methods.comparePasswords which is a function that also does the passwords comparisons just like bcrypt.compare function. You can check it out
        const isPasswordCorrect = await avalilableuser.comparePasswords(req.body.password);
        
        //Or you can uncomment the compare functioon below should work the same.
        // const isPasswordCorrect = await bcrypt.compare(req.body.password, avalilableuser.password);

        if(!isPasswordCorrect) return next(createError(401, "Invalid User password!"));

        const {password, isAdmin, ...otherDetails} = avalilableuser._doc;

        //Authenticating loggedIn user.
        const token = await jwt.sign({id: avalilableuser._id, isAdmin: avalilableuser.isAdmin}, process.env.JWT_KEY);

        res.
            cookie("token", token, {
                httpOnly: true
            })
            .json({...otherDetails});
    }catch (err){
        next(err);
    }
}


//Update any user
export const updateUser = async(req, res, next) => {
    try{

        //Encrypting user password before the object is updated in the database.
        const passwordUpdate = req.body;
        if (req.body.password){
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            passwordUpdate.password = hash;
        }

        const updatedUser = await userSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    }catch(err) {
        next(err);
    }
}

//Delete any user
export const deleteUser = async(req, res, next) => {
    try{
        await userSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({message: `$User deleted`});
    }catch (err){
        next(err);
    }
}

//Get a specific User
export const getUser = async(req, res, next) => {
    try{
        const user = await userSchema.findById(req.params.id);
        res.status(200).json(user);
    }catch (err) {
        next(err);
    }
}

//Get all users present
export const getAllUsers = async(req, res, next) => {
    try{
        const users = await userSchema.find();
        res.status(200).json(users);
    }catch (err) {
        next(err);
    }
}

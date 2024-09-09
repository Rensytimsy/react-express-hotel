import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";


const User = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


//hashing the user password before saving a user.
User.pre("save", async function (next){
    const user = this;
    try{
        if (user.isModified("password") || user.isNew){
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);

            user.password = hash;
            next();
        }
    }catch (err){
        next(err);
    }
});

//Comparing passwords
User.methods.comparePasswords = function(password) {
    return bcrypt.compare(this.password, password);
}



export default mongoose.model("HotelUsers", User);
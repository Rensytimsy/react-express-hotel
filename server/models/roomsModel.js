import mongoose from "mongoose";
import { Schema } from "mongoose";

const rooms = new Schema({
    title: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{number: Number, unavailableDays: {type: [Date]}}],
},{timestamps: true});

export default mongoose.model("hotelRooms", rooms);
import mongoose from "mongoose";
import { Schema } from "mongoose";


const Hotel = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    continent:{
        type: String,
        required: true
    },
    city: { 
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
    ,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    location: {
        type: String
    }
}, {timestamps: true});



export default mongoose.model("HotelsModel", Hotel);
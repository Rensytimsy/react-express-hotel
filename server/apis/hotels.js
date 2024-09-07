import express from "express";
import HotelSchema from "../models/hotelModel.js"

const router = express.Router();


//Creating a hotel.
router.post("/hotel", async(req, res) => {
    try{
        // const Hotel = new HotelSchema({
        //     name: req.body.name,
        //     type: req.body.type,
        //     desc: req.body.desc,
        //     city: req.body.city,
        //     address: req.body.address,
        //     distance: req.body.distance,
        //     photos: req.body.photos,
        //     rating: req.body.rating,
        //     rooms: req.body.rooms,
        //     cheapestPrice: req.body.cheapestPrice,
        //     featured: req.body.featured
        // });

        // //You can just replace the code above with makes the code much more clear and no much time of writing code.
        const Hotel = new HotelSchema(req.body)

        await Hotel.save();
        res.status(200).json({message: "Hotel saved!"});

    }catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Updating a hotel
router.put("/hotel/:id", async(req, res) => {
    try{
        const updatedHotel = await HotelSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

//Deleting a hotel
router.delete("/hotel/:id", async(req, res) => {
    try{
        await HotelSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Deleted"});
    }catch (err){
        res.status(500).json(err.message);
    }
});

//Get a specific hotel.
router.get("/hotel/:id", async(req, res) => {
    try{
        const hotel = await HotelSchema.findById(req.params.id);
        res.status(200).json(hotel);
    }catch (err){
        res.status(500).json(err.message);
    }
});
//Get all hotels present
router.get("/hotel", async(req, res, next) => {
    try{
        const hotels = await HotelSchema.find();
        res.status(200).json(hotels);
    }catch (err){
        res.status(500).json(err.message);
    }
});

export default router;
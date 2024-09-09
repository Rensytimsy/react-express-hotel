import roomSchema from "../models/roomsModel.js";


//Creating a Room.
export const createRoom = async(req, res, next) => {
    try{
        const newHotelRoom = new roomSchema(req.body);
        await newHotelRoom.save();
        res.status(200).json({message: "Room was created."});
    }catch(err){
        next(err);
    }
}


//get all rooms
export const getRooms = async(req, res, next) => {
    try{
        const roomsPresent = await roomSchema.find();
        res.status(200).json(roomsPresent);
    }catch(err){
        next(err);
    }
}

//update rooms
export const updateRoom = async(req, res, next) => {
    try{
        const updateRoom = await roomSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRoom);
    }catch (err){
        next(err);
    }
}

//Delete rooms
export const deleteRoom = async(req, res, next) => {
    try{
        await roomSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Room has been deleted!"});
    }catch (err) {
        next(err);
    }
}

//get specific room
export const getRoom = async(req, res, next) => {
    try{
        const newRoom = await roomSchema.findById(req.params.id);
        res.status(200).json(newRoom)
    }catch (err){

    }
}
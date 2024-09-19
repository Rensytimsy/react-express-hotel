import roomSchema from "../models/roomsModel.js";
import hotelSchema from "../models/hotelModel.js";

//Creating a Room.
export const createRoom = async(req, res, next) => {
    const rooms = new roomSchema(req.body);
    const hotelId = req.params.hotelid;
    try{
        const savedRoom = await rooms.save();
            try{
                const updatedHotelRooms = await hotelSchema.findByIdAndUpdate(hotelId, {
                    $push: {rooms: savedRoom._id}
                });
            }catch (err){
                next(err);
            }
        res.status(200).json(savedRoom);
    }catch (err){
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
    const hotelId = req.params.hotelid;
    try{
        try{
            const updateDeletedRoom = await hotelSchema.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            });
        }catch(err){
            next(err);
        }
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



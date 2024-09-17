import HotelSchema from "../models/hotelModel.js";
import RoomSchema from "../models/roomsModel.js";

//Get all hotels
export const getHotels = async(req, res, next) => {

    const {min, max, ...others} = req.query;

    try{
        const hotels = await HotelSchema.find({...others});
        res.status(200).json(hotels);
    }catch (err){
        next(err)
    }
}

//Get hotels by continent endpoint
export const getContinent = async(req, res, next) => {
    // const continents = req.query.continents.split(",");
    try{
        const europeHotels = await HotelSchema.countDocuments({continent: "Europe"});
        const africaHotels = await HotelSchema.countDocuments({continent: "Africa"});
        const northAmericaHotels = await HotelSchema.countDocuments({continent: "NorthAmerica"});
        const southAmericaHotels = await HotelSchema.countDocuments({continent: "SouthAmerica"});
        const asiaHotels = await HotelSchema.countDocuments({continent: "Asia"});
        const antarcticaHotels = await HotelSchema.countDocuments({continent: "Antarctica"});
        const oceniaHotels = await HotelSchema.countDocuments({continent: "Ocenia"});

        res.status(200).json([
            {name: "Europe", count: europeHotels},
            {name: "Africa", count: africaHotels},
            {name: "North America", count: northAmericaHotels},
            {name: "South America", count: southAmericaHotels},
            {name: "Asia", count: asiaHotels},
            {name: "Antarctica", count: antarcticaHotels},
            {name: "Ocenia", count: oceniaHotels},
        ]);

    }catch (err){
        next(err)
    }
}


//Get a specific hotel
export const getSpecificHotel = async(req, res, next) => {
    try{
        const hotel = await HotelSchema.findById(req.params.id);
        res.status(200).json(hotel);
    }catch (err){
        next(err);
    }
}

//Create a Hotel
export const createHotel = async(req, res, next) => {
    try{
        const Hotel = new HotelSchema(req.body)

        await Hotel.save();
        res.status(200).json({message: "Hotel saved!"});

    }catch (err) {
       next(err);
    }
}

//Delete Hotel
export const deleteHotel = async (req, res, next) => {
    try{
        await HotelSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Deleted"});
    }catch (err){
        res.status(500).json(err.message);
    }
}

//Update Hotel
export const updateHotel = async(req, res, next) => {
    try{
        const updatedHotel = await HotelSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

export const getHotelCount = async(req, res, next) => {
    const cities = req.query.cities.split(",");
    try{
        const list = await Promise.all(cities.map(city => {
            return HotelSchema.countDocuments({city:city});
        }));
        res.status(200).json(list);
    }catch(err) {
        next(err);
    }
}

export const getByType = async(req, res, next) => {
    try{
        const hotelCount = await HotelSchema.countDocuments({type: "Hotel"});
        const villaCount = await HotelSchema.countDocuments({type: "Villa"});
        const cabinCount = await HotelSchema.countDocuments({type: "Cabin"});
        const resortCount = await HotelSchema.countDocuments({type: "Resort"});
        const apartmentCount = await HotelSchema.countDocuments({type: "Apartment"});

        
        res.status(200).json([
            {type: "Hotel", count: hotelCount},
            {type: "Apartment", count: apartmentCount},
            {type: "Villa", count: villaCount},
            {type: "Resort", count: resortCount},
            {type: "Cabin", count: cabinCount},
        ]);
    }catch(err) {
        next(err);  
    }
}

//Get hotels rooms
export const hotelRooms = async(req, res, next) => {
    try{
        const hotel = await HotelSchema.findById(req.params.id);
        const hotelRooms = await Promise.all(hotel.rooms.map((room) => {
            return RoomSchema.findById(room);
        }));
        res.status(200).json(hotelRooms);
    }catch(err){
        next(err);
    }
}
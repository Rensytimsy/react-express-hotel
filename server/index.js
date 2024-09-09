import express from "express";
import cors from "cors";
import ApiRouter from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the db !");
    }catch(err){
        console.log("Something went wrong: ", err.message);
    }
}

const port = 3000;
const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
}
//Midlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(corsOptions));
app.use(ApiRouter);

//Error handling middleware.
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong";
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack : err.stack,
    });
});


app.listen(port, () => {
    //Enables we are connected to the db everytime the server is up and running.
        connectToDB();
        console.log(`server running at --> http://localhost:${port}`);
    });
import express from "express";
import cors from "cors"
import ApiRouter from "./routes/index.js"
import mongoose from "mongoose";
import dotenv from "dotenv"

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
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(corsOptions));
app.use(ApiRouter);
app.use((req, res, next) => {
    console.log("Hi i am a middleware");
});


app.listen(port, () => {
    //Enables we are connected to the db everytime the server is up and running.
        connectToDB();
        console.log(`server running at --> http://localhost:${port}`);
    });
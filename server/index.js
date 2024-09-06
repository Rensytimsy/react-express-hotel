import express from "express";
import cors from "cors"
import router from "./apis/hotelData.js"

const port = 3000;
const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOptions));
app.use(router);

app.listen(port, () => console.log(`server running at --> http://localhost:${port}`));
import express from "express";
import dotenv from 'dotenv';
import cors from  'cors'

import router from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000



app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(rateLimiter);

app.use('/notes/api', router)

connectDb().then(() => {
   app.listen(PORT, () => {
    console.log('Listening at port', PORT)
    }) 
})

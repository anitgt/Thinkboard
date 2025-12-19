import express from "express";
import dotenv from 'dotenv';
import cors from  'cors';
import path from  'path';

import router from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000
const __dirname = path.resolve();

if(process.env.NODE_ENV !== "production") {
    app.use(cors({
    origin: "http://localhost:5173"
}))
}

app.use(express.json())
app.use(rateLimiter);

app.use('/api/notes', router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend","dist","index.html"))
})
}

connectDb().then(() => {
   app.listen(PORT, () => {
    console.log('Listening at port', PORT)
    }) 
})

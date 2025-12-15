import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDb();

app.use('/notes/api', router)

app.listen(3000, () => {
    console.log('Listening at port 3000')
}) 
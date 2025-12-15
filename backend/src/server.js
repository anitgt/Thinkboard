import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

connectDb();

app.use('/notes/api', router)

app.listen(PORT, () => {
    console.log('Listening at port', PORT)
}) 
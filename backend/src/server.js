import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDb } from "../config/db.js";
import dotenv from 'dotenv';
import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000



app.use(express.json())
app.use(rateLimiter);

// app.use((req,res,next) => {
//     console.log(`Req Method is ${req.method} Req URL is ${req.url}`);
//      next()
// })

app.use('/notes/api', router)

connectDb().then(() => {
   app.listen(PORT, () => {
    console.log('Listening at port', PORT)
    }) 
})

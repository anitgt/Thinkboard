import express from "express";
import router from "./routes/notesRoutes.js";

const app = express();

app.use('/notes/api', router)

app.listen(3000, () => {
    console.log('Listening at port 3000')
}) 
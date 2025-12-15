import express from 'express';
import notesRouter from "./notesRoutes.js"


const app = express();

app.use("/notes/api", notesRouter)

app.listen(3000, () => {
    console.log('listening at port 3000')
})
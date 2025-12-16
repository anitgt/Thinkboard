import express from "express";
import { getAllNotes, createNote,  deleteNote, updateNote, fetchNote } from "../controllers/notesController.js";

const router = express.Router();

router.get('/', getAllNotes)
router.get('/:id', fetchNote)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id' , deleteNote )



export default router
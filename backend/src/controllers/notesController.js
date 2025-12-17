import Note from  '../../models/Note.js'

export const getAllNotes = async (req,res) => {
   try {
    const notes = await Note.find().sort({createdAt: -1})
    return res.status(200).json(notes)
   } catch (e) {
    console.error('Something is wrong in finding Notes', e);
    return res.status(500).json({message: 'Internal server error'})
   }
};


export const createNote = async (req,res) => {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        const savedNote = await note.save();
        res.status(200).json(savedNote)
    } catch (e) {
        console.error('Problem in creating New Note', e);
        res.status(500).json({message: 'Internal server error'})
    }
}

export const updateNote = async (req,res) => {
   try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, { new: true});
    if(!updatedNote) {
        return res.status(404).json({message: "Note not found!"})
    }
    res.status(200).json(updatedNote);
   } catch (e) {
    console.error('Error in editing the note', e);
    res.status(500).json({message: "Internal server error"})
   }
}

export const fetchNote = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note) {
            return res.status(500).json({message: "Note not found"})
        };
        res.status(200).json(note);
    } 
    catch (e) {
        console.error('Error in finding the note', e);
    res.status(500).json({message: "Internal server error"})
    }
}

export const deleteNote = async (req,res) => {
      try {
        const { title, content} = req.body;
      const deletedNote = await Note.findByIdAndDelete(req.params.id, {title, content}, { new: true });
      if(!deletedNote) {
        return res.status(404).json({message : "Note not found"});
      };
      res.status(200).json({message: "Note deleted Successfully!"});
      } catch (e) {
        console.error("Error in deleting the note", e);
        res.status(500).json({message: "Internal server error"})
      }
}
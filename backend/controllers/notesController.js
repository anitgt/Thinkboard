export const getAllNotes =  (req,res) => {
   res.status(200).send('This is NotePost page')
};


export const createNote = (req,res) => {
    res.status(201).json({message: "Note successfully created!"})
}

export const updateNote = (req,res) => {
    res.status(200).json({message: "Note has been updated Sucessfully!"})
}

export const editNote = (req,res) => {
    res.status(200).json({message : "Note has been edited succssfully!"})
}

export const deleteNote = (req,res) => {
      res.status(200).json({message: "Post deleted successfully!"})
}
const Note = require('../models/noteModel');

// GET - Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNote = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    text: req.body.text,
  });
};

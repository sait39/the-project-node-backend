const mongoose = require('mongoose');
const Note = require('../schemas/Notes');

async function saveNote(note) {
  try {
    const newNote = new Note(note);

    await newNote.save();

    console.log('Note created successfully');
  } catch (error) {
    console.error('Error creating note:', error);
  }
}

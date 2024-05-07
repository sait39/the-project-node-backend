import mongoose from 'mongoose';

const { Schema } = mongoose;

const notesSchema = new Schema({
  title: String,
  text: String,
  user_id: Schema.Types.ObjectId,
  completed: Boolean,
  created_at: String, // TimeStamp String
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Note;

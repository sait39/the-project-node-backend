import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  text: String,
  user_id: Schema.Types.ObjectId,
  completed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

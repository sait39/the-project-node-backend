const mongoose = require('mongoose');

const DB_NAME = 'your_database_name';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/' + DB_NAME;

mongoose.connect(MONGODB_URI)
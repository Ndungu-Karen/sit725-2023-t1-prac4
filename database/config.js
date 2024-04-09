// db.js

const mongoose = require('mongoose');

// Define MongoDB connection URI
const mongoURI = 'mongodb+srv://Ndungu:Ndungu@cluster0.mhjgspt.mongodb.net/mydatabase?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to know when we're connected)
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

module.exports = db;

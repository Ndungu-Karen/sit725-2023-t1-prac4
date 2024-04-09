const express = require("express");
const mongoose = require('mongoose');

const app = express();

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Define a Mongoose schema for card data
const cardSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

// Create a Mongoose model for card data
const Card = mongoose.model('Card', cardSchema);

// Connect to MongoDB and delete existing data before inserting sample data
mongoose.connect('mongodb+srv://Ndungu:Ndungu@cluster0.mhjgspt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        startServer(); // Start the server after sample data is inserted
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });


// Define a GET endpoint to serve card data
app.get('/api/projects', async (req, res) => {
    try {
        // Fetch card data from the database
        const cards = await Card.find({});
        res.json({ statusCode: 200, data: cards, message: "Success" });
    } catch (err) {
        console.error('Error fetching card data:', err);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
});

// Define the port for the server to listen on
const port = process.env.PORT || 3000;

// Function to start the server
function startServer() {
    app.listen(port, () => {
        console.log("App listening on port: " + port);
    });
}

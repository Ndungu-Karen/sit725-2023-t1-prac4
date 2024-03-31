// Import necessary modules
const express = require("express");
const app = express();

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Sample data (array of objects)
const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpg",
        link: "About Kitten 2",
        description: "Demo description about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        description: "Demo description about kitten 3"
    }
];

// Define a GET endpoint to serve data
app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" });
});

// Define the port for the server to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log("App listening on port: " + port);
});

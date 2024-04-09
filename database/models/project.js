const mongoose = require('mongoose');

// Define schema for projects
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create model from schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 or an environment variable

// Serve static files from the 'public' directory
// The 'public' directory is located one level up from 'server'
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Define a route for the root URL
app.get('/', (req, res) => {
    // This will serve the index.html file from the public directory
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Basic API endpoint (optional, but shows Express backend capability)
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the Express.js backend!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Serving files from: ${path.join(__dirname, '..', 'frontend')}`);
});
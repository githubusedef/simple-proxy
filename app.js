const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*', // Adjust as needed for security
    methods: ['GET', 'POST'],
    allowedHeaders: ['X-Requested-With', 'Content-Type']
}));

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    // Add logic to fetch and return content from the specified URL
});

app.listen(3000, () => console.log('Server running on port 3000'));

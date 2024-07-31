const express = require('express');
const cors = require('cors');
const request = require('request'); // Add request module to handle HTTP requests

const app = express();

app.use(cors({
    origin: '*', // Adjust this as needed
    methods: ['GET', 'POST'],
    allowedHeaders: ['X-Requested-With', 'Content-Type']
}));

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL query parameter is required.');
    }
    
    request(url).pipe(res); // Pipe the request response directly to the client
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));

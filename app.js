const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://yourdomain.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['X-Requested-With', 'Content-Type']
}));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

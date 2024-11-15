const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`User's Location: Latitude: ${latitude}, Longitude: ${longitude}`);
    res.json({ message: 'Location received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const hotels = require('./data/hotels.json')
const locations = require('./data/location.json')

app.get('/', (req, res) => {
    res.send('Travel Agency Running')
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotels/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const hotel = hotels.find(it => it.id === id);
    res.send(hotel)
})

app.get('/locations', (req, res) => {
    res.send(locations)
})
app.get('/locations/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const location = locations.find(it => it.id === id);
    res.send(location)
})



app.listen(port, () => {
    console.log(`Travel Agency Running on port ${port}`)
})
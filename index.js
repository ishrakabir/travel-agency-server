const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const hotels = require('./data/hotels.json')

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




app.listen(port, () => {
    console.log(`Travel Agency Running on port ${port}`)
})
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const app = express()


app.use(cors());
app.use(express.json())
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error(err));
const port = 5000;

app.get('/', (req, res) => {
    res.send("All tasks")
})

app.listen(port, () => {
    console.log(`server up on port ${port}`)
})
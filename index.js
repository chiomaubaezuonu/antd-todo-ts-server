const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const Task = require('./Model/Task')
require('dotenv').config();
const app = express()


app.use(cors());
app.use(express.json())
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error(err));
const port = 5000;

app.get('/todos', (req, res) => {
    res.send("Get all tasks")
})

app.post('/todos', (req, res) => {
    const task = req.body.task;
    Task.create({
        task:task
    })
    .then(result => res.json(result))
    .then(err => res.json(err))
})

app.listen(port, () => {
    console.log(`server up on port ${port}`)
})
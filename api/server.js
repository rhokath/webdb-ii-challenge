const express = require('express');

const carsRouter = require('../cars/cars-router');

const server = express()
server.use(express.json());

server.use('/api/cars', carsRouter);

//sanity check
server.get('/', (req, res)=>{
    res.send('it is working!')
})


module.exports = server;
const express = require('express');
const route = express.Router();

route.get('/add', (req, res) => {
    res.send(' Add request from Product Router');
});

route.get('/update', (req, res) => {
    res.send('Update request from Product Router');
});

route.get('/delete', (req, res) => {
    res.send('Delete request from Product Router');
});



module.exports = route;
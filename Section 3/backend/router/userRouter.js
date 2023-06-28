const express = require('express'); //req
const router = express.Router(); 
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.get('/delete', (req, res) => {
    res.send('Response from  user delete server');
});

router.get('/getbyid', (req, res) => {
    res.send('Response from  user get by id server');
});

router.get('/update', (req, res) => {
    res.send('Response from  user update server');
});

router.get('/getbyemail', (req, res) => {
    res.send('Response from  user get by email server');
});

module.exports = router; // export router
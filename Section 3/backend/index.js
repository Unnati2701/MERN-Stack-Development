// main file for backend

const express = require('express');
const app = express(); // initializing express app
const port = 5000;

const userRouter = require('./router/userRouter'); //import router from userRouter

app.use('/user', userRouter); //middleware

//Routes
app.get('/', (req, res) => {
    res.send('Response from express server');
}); 

app.get('/add', (req, res) => {
    res.send('Response from add server');
});

app.get('/delete', (req, res) => {
    res.send('Response from delete server');
}); 

//starting the server
app.listen(port, () => {
    console.log('Server started on port');
});
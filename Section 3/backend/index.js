// main file for backend

const express = require('express');
const app = express(); // initializing express app
const port = 5000;

const userRouter = require('./router/userRouter'); //import router from userRouter
const feedbackRouter = require('./router/feedbackRouter'); //import router from userRouter
const productRouter = require('./router/productRouter'); //import router from productRouter
const utilRouter = require('./router/util'); //import router from util

const cors = require('cors');

app.use(express.json());// middleware 
app.use(cors());

app.use('/user', userRouter); //middleware
app.use('/feedback', feedbackRouter); //middleware
app.use('/products', productRouter); //middleware
app.use('/util', utilRouter); //middleware

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

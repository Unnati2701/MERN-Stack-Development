const mongoose = require('mongoose');

const uri = 'mongodb+srv://Unnati:Muskan@cluster0.penqqzc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose
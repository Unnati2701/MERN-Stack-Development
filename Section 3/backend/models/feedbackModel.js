const {Schema, model, Types} = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user'},
    rating: {type: Number, require: true},
    feedback: {type: String, require: true},
    createdAt: {type: Date, default: Date.now},
});

module.exports = model('feedbacks', mySchema);
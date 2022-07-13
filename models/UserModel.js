const mongoose = require('mongoose');
const { v4: uuidv4} = require('uuid');
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: uuidv4()
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model('User', userSchema, 'Users'); // name of model , schema, name of collection
const mongoose = require('mongoose')
const userSchema = mongoose.model('posts',{
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Mob: {
        type: String
    },
    image:{
        type: String
    }

});

module.exports = userSchema;
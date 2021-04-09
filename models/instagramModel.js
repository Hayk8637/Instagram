const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    Firstname: {
        type:String
    },
    Lastname: {
        type:String
    },
    Age: {
        type:Number
    },
    email: {
        type: String
    },
    Password: {
        type:String
    }
})

const MODEL= mongoose.model('Instagarm' , schema);
module.exports = MODEL;

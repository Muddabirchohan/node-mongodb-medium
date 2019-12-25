var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
 
   name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
})

const usermodel = mongoose.model('users',userSchema);
module.exports = usermodel;

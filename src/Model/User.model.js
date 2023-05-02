const mongoose = require('mongoose');

const User_Schema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String,required : true, unique : true},
    gender : {type : String, required : true},
    password : {type : String, required : true},
});

const USER_MODEL = mongoose.model('user',User_Schema);

module.exports = {USER_MODEL};




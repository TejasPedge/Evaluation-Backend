const mongoose = require('mongoose');

const Post_Schema = mongoose.Schema({
    title: {type : String, required : true},
    body : {type : String,  required: true},
    device : {type : String, required : true},
    userId : {type : String, required : true},
});

const POST_MODEL = mongoose.model('post',Post_Schema);

module.exports = {POST_MODEL};




const express = require('express');
const POST_Routes = express.Router();
const {GET_Posts,POST_Posts,DELETE_Posts,POST_Updateposts} = require('../Controllers/Post.controller');
const {Authenticate_and_Authorise} = require('../Middlewares/Auth.middleware')

POST_Routes.get('/',Authenticate_and_Authorise,GET_Posts);
POST_Routes.post('/create',Authenticate_and_Authorise,POST_Posts);
POST_Routes.delete('/delete/:id',Authenticate_and_Authorise,DELETE_Posts);
POST_Routes.patch('/update/:id',Authenticate_and_Authorise,POST_Updateposts);


module.exports = {POST_Routes};
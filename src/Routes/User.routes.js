const express = require('express');
const UserRoutes = express.Router();
const {GET_Users,POST_AddUser,POST_UserLogin} = require('../Controllers/User.controller')

UserRoutes.get('/',GET_Users);
UserRoutes.post('/register',POST_AddUser)
UserRoutes.post('/login',POST_UserLogin)








module.exports = {UserRoutes};
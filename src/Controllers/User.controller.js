const {USER_MODEL} = require('../Model/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// getting the user Data ===> not Secured for ease purpose to see on thunderclient

const GET_Users = async (req,res) => {
    try {
        const users = await USER_MODEL.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
};

// Post user Data to the database

const POST_AddUser = async (req, res) => {
    try {
        let req_data = req.body;
        const hashed_password = bcrypt.hashSync(req_data.password,8);
        req_data.password = hashed_password;
        const data = new USER_MODEL(req_data);
        await data.save();
        res.send({msg : "user registered successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
};


// user login

const POST_UserLogin = async (req, res) => {
    try {
        const {email,password} = req.body;
        const data = await USER_MODEL.findOne({email: email});
        if(!data) {
            return res.status(404).send({"msg" : "you are not resistered user, register to login"});
        }
        bcrypt.compare(password,data.password,(err,result) => {
            if(!result) {
                return res.status(500).send({"msg" : "wrong Password"});
            }
            const token = jwt.sign({name : data.name, gender : data.gender,userId : data._id},process.env.SECRET_KEY);
            res.send({token : token});
        });
    } catch (error) {
        res.status(500).send({"err" : error});
        console.log(error);
    }
}



module.exports = {GET_Users,POST_AddUser,POST_UserLogin};
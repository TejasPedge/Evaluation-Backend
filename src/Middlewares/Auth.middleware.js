const jwt = require('jsonwebtoken')

const Authenticate_and_Authorise = async (req,res,next) => {

    try {
        let token = req.headers.authorization;

        if(!token){
            return res.status(500).send({"err" : "please provide token"});
        }

        token = token.split(' ')[1];

        jwt.verify(token,process.env.SECRET_KEY,(err,decode) => {

            if(err) {
                return res.send({"err" : err})
            }
            req.payload = decode;
            next();
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }


}

module.exports = {Authenticate_and_Authorise}
const {POST_MODEL} = require('../Model/Post.model');

const GET_Posts  = async (req,res) => {
    try {
        const {device,device1,device2} = req.query;

        const {name,gender,userId} = req.payload;

        obj = {
            userId:userId,
        };

        if(device) {

            obj.device ={$regex : device, $options : 'i'};

        }

        if(device1) {

            obj.device ={$regex : device1, $options : 'i'};

        }

        if(device2) {

            obj.device ={$regex : device2, $options : 'i'};

        }



       
        const data = await POST_MODEL.find(obj);

        res.send(data);

    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
}

const POST_Posts = async (req, res) => {
    try {
        const {name,gender,userId,} = req.payload;
        const req_data = req.body;
        req_data.userId = userId;
        const data = POST_MODEL(req_data);
        await data.save();
        res.send({"msg" : "post created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
    
};

const DELETE_Posts = async (req,res) => {
    try {
        const id = req.params.id;
        const {userId} = req.payload;
        const data = await POST_MODEL.findByIdAndDelete(id);
        if(userId != data.userId) {
            return res.status(500).send({"msg" : "you are not authorised to do this operation"});
        }
        if(!data) {
            return res.status(404).send({"msg" : "post not found"});
        }
        res.send({"msg" : "post deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
}

const POST_Updateposts = async (req, res) => {
    try {
        const id = req.params.id;
        const {userId} = req.payload;
        const req_data = req.body;
        const data = await POST_MODEL.findByIdAndUpdate(id,req_data);
        if(userId != data.userId) {
            return res.status(500).send({"msg" : "you are not authorised to do this operation"});
        }
        if(!data) {
            return res.status(404).send({"msg" : "post not found"});
        }
        res.send({"msg" : "post updated Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"err" : error});
    }
};

module.exports = {GET_Posts,POST_Posts,DELETE_Posts,POST_Updateposts};
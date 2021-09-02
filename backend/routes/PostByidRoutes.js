const postModel = require('../src/models/postmodel')
let getpostByIdRoute = (req,res)=>{
    postModel.find({_id:req.perams.post_id},function(e,d){
        if(e) res.status(400).json(e);
        res.status(200).json(d);
    });
};

module.exports = getpostByIdRoute
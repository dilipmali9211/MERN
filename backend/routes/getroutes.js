const userModel = require('../src/models/postmodel')

let getroute=function (req, res) {
    userModel.find({},function(e,d){
        if(e) res.status(400).json(e);
        res.status(200).json(d);
    });
}

module.exports=getroute
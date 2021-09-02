const postModel = require('../src/models/postmodel')
let deletepost = (req, res) => {
    let pid = req.params.postid;
    postModel.findByIdAndDelete({_id:req.params.postid},function(e,d){
        if(e) res.status(400).json(e)
        res.status(200).json({
            "msg":"Data Deleted Successfully"
        })
    })
}
module.exports = deletepost
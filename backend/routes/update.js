const postModel = require('../src/models/postmodel')
let updatepost = (req, res) => {
    postModel.findOneAndUpdate({ _id: req.body._id }, {
        name: req.body.name,
        class: req.body.class,
        Address: req.body.Address,
        Mob: req.body.Mob,
        image: req.body.image
    }, function (d) {
        res.status(200).json({
            "msg": "data updated"
        })
    })

}
module.exports = updatepost
const userSchema = require('../src/models/postmodel')

let addpost = function (req, res) {
    const usermodel = new userSchema(req.body)
    usermodel.save().then((d) => {
        res.status(201).json({
            msg: "data stroed successfully",
            d: req.body
        });
    });
}

module.exports = addpost;

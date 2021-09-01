const mongoose = require("mongoose")
const env = require('./dotenv')
const dbo = mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xj3jw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
dbo.then((d) => {
    console.log('connected' +d)
}).catch((e) => {
    console.log(e)
}).finally()

module.exports = dbo;
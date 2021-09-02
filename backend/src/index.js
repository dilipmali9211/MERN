//console.log('hello');

const express = require("express");
const app = express();

var cors = require('cors')
const env = require('./dotenv')
const dbo = require('./db');

const getroute = require('../routes/getroutes')
const addpost = require('../routes/addpost');
const updatepost = require("../routes/update");
const getpostByIdRoute = require("../routes/PostByidroutes");
const deletepost = require("../routes/deletpost");

app.use(cors())
app.use(express.json());

app.get('/getposts', getroute);
app.get('/getpostsbyid/:postid', getpostByIdRoute);
app.post('/addpost', addpost);
app.put('/updatepost',updatepost)
app.delete('/deletepost/:postid',deletepost)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running ${process.env.PORT}`);
})
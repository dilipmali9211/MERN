//console.log('hello');

const express = require("express");
const app = express();

var cors = require('cors')
const env = require('./dotenv')
const dbo = require('./db');

const getroute = require('../routes/getroutes')
const addpost = require('../routes/addpost')

app.use(cors())
app.use(express.json());

app.get('/getposts', getroute);
app.post('/addpost', addpost);

app.listen(process.env.PORT, () => {
    console.log(`Server is Running ${process.env.PORT}`);
})
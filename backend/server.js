const express = require('express')
const app = express();
const port = 6000
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const authrouter = require('./routes/auth')
const postrouter = require('./routes/posts')
const usersrouter = require('./routes/users')

app.use(express.json())
app.use(cors())
app.use(cookieparser());

const connection = async()=> 
{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('database is connected...');
    } catch (error) {
        console.error(error);
    }
}
connection();

app.use('/auth',authrouter)
app.use('/posts',postrouter)
app.use('/users',usersrouter)
app.listen(port,()=> {
    console.log(`server is running on port ${port}...`)
})
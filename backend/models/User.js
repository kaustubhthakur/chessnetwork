const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: [String],
        default: [],
    },
    profilePic: {
        type: String,
        default: "invalid profile picture",
    },
    bio: {
        type: String,
        required: "i am inevitable",
    },
    followers:{
        type:[String],
        default:[]
    },
    following:{
        type:[String],
        default:[],
    }
})
module.exports = mongoose.model("User", UserSchema)
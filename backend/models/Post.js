const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    votes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
    }
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("Post", PostSchema);
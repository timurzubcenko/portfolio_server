const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    email: {
        type: mongoose.Types.ObjectId,
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
})

module.exports = Message = mongoose.model('message', messageSchema)
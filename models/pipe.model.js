const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pipe = new Schema ({
    id: { type: String },
    title: { type: String },
    author: { type: String },
    description: { type: String },
    likes: { type: Number },
    dislikes: { type: Number },
    url: { type: String },
    tags: { type: Array },
    comments: { type: Array },
    date: { type: Date },
    modules: { type: Object },
    impactFactor: { type: Number },
    isHidden: { type: Boolean },
    isDeleted: { type: Boolean }
});


module.exports = mongoose.model('Pipe', Pipe);
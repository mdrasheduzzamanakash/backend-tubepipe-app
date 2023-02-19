const mongoose = require('mongoose');
const { Schema } = mongoose;

const Module = new Schema({
    email: { type: String },
    m_id: { type: String },
    category: { type: String },
    pipeId: { type: String }
});


module.exports = mongoose.model('Module', Module);
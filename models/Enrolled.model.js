const mongoose = require('mongoose');
const { Schema } = mongoose;

const Enrolled = new Schema ({
    pipeId : { type: String },
    email : { type: String },
});


module.exports = mongoose.model('Enrolled', Enrolled);
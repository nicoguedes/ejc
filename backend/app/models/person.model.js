const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    name: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', PersonSchema);
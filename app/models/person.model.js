const mongoose = require('mongoose');

const EventParticipationSchema = mongoose.Schema({
    eventName: String,
    role: String,
    year: Number,
    isCoordinator: Boolean, // coordenador de equipe do EJC
    isSupport: Boolean // tio do EJC
});

const PersonSchema = mongoose.Schema({
    name: String,
    eventParticipations: [EventParticipationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', PersonSchema);
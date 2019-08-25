const mongoose = require('mongoose');

const EventParticipationSchema = mongoose.Schema({
    eventName: String,
    photo: String,
    team: String,
    year: Number,
    isCoordinator: Boolean, // coordenador de equipe do EJC
    isSupport: Boolean // tio do EJC
});

const PersonSchema = mongoose.Schema({
    name: String,
    dob: Date,
    phone: String,
    email: String,
    facebookId: String,
    instagramId: String,
    eventParticipations: [EventParticipationSchema]
}, {
        timestamps: true
    });

// TODO: insert an index on the name field and possibly on the eventParticipation name as well
// PersonSchema.index({
//     name: 'text',
//     description: 'text',
// }, {
//         weights: {
//             name: 5,
//             description: 1,
//         },
//     });

module.exports = mongoose.model('Person', PersonSchema);
const Person = require('../models/person.model.js');

// Create and Save a new person
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a Person
    const person = new Person(req.body);
    
    // Save Person in the database
    person.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Person."
        });
    });
};

// Retrieve and return all persons from the database.
exports.findAll = (req, res) => {
    Person.find()
    .then(persons => {
        res.send(persons);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving persons."
        });
    });
};

// Find a single person with a id
exports.findOne = (req, res) => {
    Person.findById(req.params.id)
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });            
        }
        res.send(person);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving person with id " + req.params.id
        });
    });
};

// Update a person identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Person name cannot be empty"
        });
    }

    // Find person and update it with the request body
    Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });
        }
        res.send(person);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating person with id " + req.params.id
        });
    });
};

// Delete a person with the specified id in the request
exports.delete = (req, res) => {
    Person.findByIdAndRemove(req.params.id)
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });
        }
        res.send({message: "Person deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete person with id " + req.params.id
        });
    });
};

module.exports = (app) => {
    const persons = require('../controllers/person.controller.js');

    app.post('/persons', persons.create);

    app.get('/persons', persons.findAll);

    app.get('/persons/:id', persons.findOne);

    app.put('/persons/:id', persons.update);

    app.delete('/persons/:id', persons.delete);
}
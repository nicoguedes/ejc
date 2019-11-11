const auth = require("../middleware/auth.js");

module.exports = (app) => {
    const persons = require('../controllers/person.controller.js');

    app.post('/persons', auth, persons.create);

    app.get('/persons', auth, persons.findAll);

    app.get('/persons/:id', auth, persons.findOne);

    app.put('/persons/:id', auth, persons.update);

    app.delete('/persons/:id', auth, persons.delete);
}
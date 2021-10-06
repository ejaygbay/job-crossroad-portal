const routers = require('express').Router();

routers.get('/teachers', (req, res) => {
    res.render('teachers/all-teachers');
})

routers.get('/teachers/create', (req, res) => {
    res.render('teachers/create-teacher');
})

routers.get('/teachers/edit', (req, res) => {
    res.render('teachers/edit-teacher');
})

module.exports = routers;
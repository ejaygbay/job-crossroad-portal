const routers = require('express').Router();

routers.get('/jobs/personal', (req, res) => {
    res.render('subjects/all-subjects');
})

routers.get('/subjects/create', (req, res) => {
    res.render('subjects/create-subject');
})

routers.get('/subjects/assign', (req, res) => {
    res.render('subjects/assign-subject');
})

module.exports = routers;
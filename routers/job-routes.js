const routers = require('express').Router();

routers.get('/jobs/personal', (req, res) => {
    res.render('jobs/all-subjects');
})

routers.get('/jobs/create', (req, res) => {
    res.render('jobs/create-subject');
})

routers.get('/jobs/assign', (req, res) => {
    res.render('jobs/assign-subject');
})

module.exports = routers;
const routers = require('express').Router();

routers.get('/jobs/personal', (req, res) => {
    res.render('jobs/personal-jobs');
})

routers.get('/jobs/create', (req, res) => {
    res.render('jobs/create-job');
})

routers.get('/jobs', (req, res) => {
    res.render('jobs/all-jobs');
})

module.exports = routers;
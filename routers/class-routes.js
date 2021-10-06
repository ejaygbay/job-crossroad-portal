const routers = require('express').Router();

routers.get('/classes', (req, res) => {
    res.render('classes/all-classes');
})

routers.get('/classes/create', (req, res) => {
    res.render('classes/create-class');
})

routers.get('/classes/sponsor', (req, res) => {
    res.render('classes/assign-sponsor');
})

module.exports = routers;
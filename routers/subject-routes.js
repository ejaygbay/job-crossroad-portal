const routers = require('express').Router();

routers.get('/subjects', (req, res) => {
    res.render('subjects/all-subjects');
})

routers.get('/subjects/create', (req, res) => {
    res.render('views-template/views-template');
    // res.render('subjects/all-subjects');
})

module.exports = routers;
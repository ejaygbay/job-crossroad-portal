const routers = require('express').Router();

routers.get('/subjects', (req, res) => {
    res.render('subjects/all-subjects');
})

module.exports = routers;
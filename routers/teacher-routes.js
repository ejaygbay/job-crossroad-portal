const routers = require('express').Router();

routers.get('/teachers', (req, res) => {
    res.render('all-teachers');
})

module.exports = routers;
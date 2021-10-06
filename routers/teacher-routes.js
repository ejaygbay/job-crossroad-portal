const routers = require('express').Router();

routers.get('/teachers', (req, res) => {
    res.render('teachers/all-teachers');
})

module.exports = routers;
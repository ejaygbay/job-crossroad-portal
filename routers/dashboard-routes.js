const routers = require('express').Router();

routers.get('/', (req, res) => {
    res.render('dashboard');
})

module.exports = routers;
const routers = require('express').Router();

routers.get('/login', (req, res) => {
    res.render('auth/login');
})

module.exports = routers;
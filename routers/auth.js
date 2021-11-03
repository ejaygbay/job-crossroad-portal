const routers = require('express').Router();

routers.get('/login', (req, res) => {
    res.render('auth/login');
})

routers.get('/account/create', (req, res) => {
    res.render('auth/register');
})

module.exports = routers;
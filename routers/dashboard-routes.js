const routers = require('express').Router();

routers.get('/', (req, res) => {
    res.render('dashboard/dashboard', { page: 'dashboard' });
})

module.exports = routers;
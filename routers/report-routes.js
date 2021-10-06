const routers = require('express').Router();

routers.get('/reports', (req, res) => {
    res.render('reports/all-reports');
})

routers.get('/reports/create', (req, res) => {
    res.render('reports/create-report');
})

module.exports = routers;
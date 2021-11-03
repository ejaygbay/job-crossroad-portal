const routers = require('express').Router();

routers.get('/category', (req, res) => {
    res.render('categories/category', { page: 'category' });
})

module.exports = routers;
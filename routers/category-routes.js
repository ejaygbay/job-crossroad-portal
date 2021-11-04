const routers = require('express').Router();
const categoryControllers = require('../controllers/category-controllers');

routers.get('/category', categoryControllers)

module.exports = routers;
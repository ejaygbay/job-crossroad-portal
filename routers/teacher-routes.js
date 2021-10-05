const routers = require('express').Router();

routers.get('/teacher', (req, res) => {
    res.send("Teacher");
})

module.exports = routers;
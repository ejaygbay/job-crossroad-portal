const routers = require('express').Router();

routers.get('/Student', (req, res) => {
    res.send("Student");
})

module.exports = routers;
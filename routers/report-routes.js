const routers = require('express').Router();

routers.get('/report', (req, res) => {
    res.send("Report");
})

module.exports = routers;
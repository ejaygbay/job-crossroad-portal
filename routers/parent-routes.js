const routers = require('express').Router();

routers.get('/parent', (req, res) => {
    res.send("Parent");
})

module.exports = routers;
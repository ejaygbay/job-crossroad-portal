const routers = require('express').Router();

routers.get('/students', (req, res) => {
    res.render('students/all-students');
})

routers.get('/students/register', (req, res) => {
    res.render('students/create-student');
})

routers.get('/students/edit', (req, res) => {
    res.render('students/edit-student');
})

module.exports = routers;
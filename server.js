const express = require('express');
const app = express();
const PORT = 3000;
const teacherRoutes = require('./routers/teacher-routes');
const studentRoutes = require('./routers/student-routes');
const reportRoutes = require('./routers/report-routes');
const parentRoutes = require('./routers/parent-routes');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname, +'/public'));

app.use(teacherRoutes);
app.use(studentRoutes);
app.use(reportRoutes);
app.use(parentRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
const express = require('express');
const app = express();
const PORT = 3000;
const dashboardRoutes = require('./routers/dashboard-routes');
const teacherRoutes = require('./routers/teacher-routes');
const studentRoutes = require('./routers/student-routes');
const reportRoutes = require('./routers/report-routes');
const parentRoutes = require('./routers/parent-routes');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname, +'/public'));

app.use(dashboardRoutes);
app.use(teacherRoutes);
app.use(studentRoutes);
app.use(reportRoutes);
app.use(parentRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
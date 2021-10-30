const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routers/auth');
const dashboardRoutes = require('./routers/dashboard-routes');
const teacherRoutes = require('./routers/teacher-routes');
const subjectRoutes = require('./routers/subject-routes');


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname, +'/public'));

app.use(authRoutes);
app.use(dashboardRoutes);
app.use(teacherRoutes);
app.use(subjectRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
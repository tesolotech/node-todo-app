const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

// Require Users routes
require('./app/routes/todo.routes.js')(app);

app.listen(app.get('port'), () => console.log(`Server is listening on port ${app.get('port')}`));






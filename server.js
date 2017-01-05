var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set the static files location ==========================
app.use(express.static(__dirname + '/public'));

// parse application/json =================================
app.use(bodyParser.json());

 // routes ======================================================================
require('./api/contacts/routes.js')(app);

 // listen (start app with node server.js) ======================================
app.listen(3000);
console.log("Server running on port 3000");
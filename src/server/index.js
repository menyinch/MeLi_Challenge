// Module
import express from 'express';

// Config
const app = express();
var port = 3001;

// Route
var routes_api = require('../../server_routes/routes_api');

// Server
app.use(express.static(__dirname + 'public'));
app.use('/api', routes_api);

app.listen(port, function () {
  console.log('Listening at http://localhost:' + port);
});

module.exports = app;

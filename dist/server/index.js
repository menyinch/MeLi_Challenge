"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

// Module
// Config
var app = (0, _express["default"])();
var port = 3001; // Route

var routes_api = require('../../server_routes/routes_api'); // Server


app.use(_express["default"]["static"](__dirname + 'public'));
app.use('/api', routes_api);
app.listen(port, function () {
  console.log('Listening at http://localhost:' + port);
});
module.exports = app;
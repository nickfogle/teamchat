//
// Chat Now!
//

var config = require('./settings.js');
var Server = require('./app/server.js');
var app = new Server(config);

app.start();

console.log("listening on port 500...");

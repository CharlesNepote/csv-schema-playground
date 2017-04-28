var express = require('express'); // https://github.com/expressjs/express
var cors = require('cors');       // https://github.com/expressjs/cors
var nedb = require('nedb');       // https://github.com/louischatriot/nedb/
var expressNedbRest = require('express-nedb-rest'); // https://github.com/bi-tm/express-nedb-rest
var package = require('./package.json');
var config = require('./config.server'); // file to store configuration variables

// setup express app
var app = express();

// Enable All CORS Requests (requests from other domains)
app.use(cors());

// ---------- create  NEDB datastore
// timestamData creates a "createdAt" field with ISO 8601 timestamp: 2017-04-06T08:39:44.016Z
var datastore = new nedb({ filename: "schemas.db",  autoload: true, timestampData: true });
// database automatic compaction interval, in millisecond (1000 * 60 * 60 * 24 = 24h)
datastore.persistence.setAutocompactionInterval(1000 * 60 * 60 * 24);

// ---------- create rest api router and connect it to datastore
var restApi = expressNedbRest();
restApi.addDatastore('schemas', datastore);

// setup express server to serve rest service
app.use(config.path, restApi);

// setup express server to serve static files
if (config.appPath === "" || config.appPath === "/") config.appPath = "";   // in cas it's not defined in config.server.js
app.use(config.appPath, express.static('public'));

app.listen(config.port, function () {
  var sep = ":";
  if (config.port === "80" || config.port === "8080") { sep = ""; config.port = ""; }
  console.log(
    package.name + ' ' +
    package.version + ' \n' +
    '-- you may use nedb rest api at ' + config.domain + sep + config.port + config.path + '\n' +
    '-- you can open app at ' + config.domain + sep + config.port + config.appPath + '/index.html'
  );
});

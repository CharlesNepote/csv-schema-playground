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

var myLogger = function (req, res, next) {
  console.log('url: ' + req.url);
  next();
};

app.use(myLogger);

// ---------- create  NEDB datastore
// timestamData creates a "createdAt" field with ISO 8601 timestamp: 2017-04-06T08:39:44.016Z
var datastore = new nedb({ filename: "schemas.db",  autoload: true, timestampData: true });
// database automatic compaction interval, in millisecond (1000 * 60 * 60 * 24 = 24h)
datastore.persistence.setAutocompactionInterval(1000 * 60 * 60 * 24);

//
app.get('/draft/:id', function(req, res, next) {
  // /draft/202017-04-12T13:59:49.953Z
  req.url = encodeURI(
    config.apiPath + '/' + config.datastore +
    '?$filter=status $eq draft $and createdAt $eq '+ req.params.id);
  //console.log('query: ' + query);
  req.query.$filter = 'status $eq draft $and createdAt $eq ' + req.params.id;
  console.log('http://localhost:' + config.port + req.url);
  next();
}); /* */

app.get('/draft/', function(req, res, next) {
  req.url = encodeURI(config.apiPath + '/' + config.datastore +'?$filter=status $eq draft');
  req.query.$filter = 'status $eq draft';
  console.log('http://localhost:' + config.port + req.url);
  next();
}); /* */

// ---------- create rest api router and connect it to datastore
var restApi = expressNedbRest();
restApi.addDatastore(config.datastore, datastore);

// setup express server to serve rest service
app.use(config.apiPath, restApi);

// setup express server to serve static files
if (config.appPath === "" || config.appPath === "/") config.appPath = "";   // in cas it's not defined in config.server.js
app.use(config.appPath, express.static('public'));

app.listen(config.port, function () {
  var sep = ":";
  if (config.port === "80" || config.port === "8080") { sep = ""; config.port = ""; }
  console.log(
    package.name + ' ' +
    package.version + ' \n' +
    '-- you may use nedb rest api at ' + config.domain + sep + config.port + config.apiPath + '\n' +
    '-- you can open app at ' + config.domain + sep + config.port + config.appPath + '/index.html'
  );
});

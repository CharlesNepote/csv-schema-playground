/**
 * Config variables for server app.
 * This file is an example. To be functional, the app should have a config.server.js file
 * based on this example.
 */
var config = {};

/**
 * root path of the app. Examples:
 * config.path = "/";
 * config.path = "/rest";
 */
config.path = "/rest";

/**
 * TCP port. Examples:
 * config.port = 8100;
 * config.port = process.env.PORT; // on cloud9 infrastructure
 */
config.port = 8100;

/**
 * domain name of the app (informative). Examples:
 * config.domain = "http://localhost";
 * config.domain = "http://example.com";
 */
config.domain = "http://localhost";

/**
 * root path of the app, where the browser open the index.html main file. Examples:
 * config.path = "/";
 * config.path = "/app";
 */
config.appPath = "/";


module.exports = config;

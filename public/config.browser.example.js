/**
 * Config variables for browser app.
 * This file is an example. To be functional, the app should have a config.browser.js file
 * based on this example.
 */
var config = {};

/**
* root path of the rest api. Examples:
 * config.path = "/";
 * config.path = "/rest";
**/
config.path = "/rest/schemas";

/**
 * TCP port. Examples:
 * config.port = ":8100";
 * config.port = process.env.PORT; // on cloud9 infrastructure
**/
config.port = ":8100";

/**
 * Server URL (without port). Examples:
 * config.server = "http://localhost";
 * config.server = "http://example.com";
**/
config.server = "http://127.0.0.1";

/**
 * URL
**/
config.url = config.server + config.port + config.path;

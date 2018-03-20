'use strict';

require('dotenv').config({silent: true});

module.exports = {
  AppName: 'csp-server',
  LogFileName: process.env.LogFileName || "./csp-server.json",
  LogLevel: process.env.LogLevel || "warn",
  Port: process.env.PORT || 9000,
  ElasticSearchHost: process.env.ElasticSearchHost || "http://elasticsearch:9200",
  ElasticSearchVersion: process.env.ElasticSearchVersion || "master",
  ElasticSearchIndex: process.env.ElasticSearchIndex || "cspdata"
};

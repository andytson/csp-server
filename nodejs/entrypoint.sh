#!/usr/bin/env bash

npm install

exec node ./server.js "$@"

const express = require('express');
const Race = require('./controllers/race.controller');

const API = express();

API.get('/races/:raceId', Race.get);

module.exports = API;

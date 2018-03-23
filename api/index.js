const express = require('express');
const Race = require('./controllers/race.controller');
const Subrace = require('./controllers/subrace.controller');

const API = express();

API.get('/races/:raceId', Race.get);
API.get('/subraces/:subraceId', Subrace.get);

module.exports = API;

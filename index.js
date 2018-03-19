require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const browserify = require('browserify');
const path = require('path');
const log = require('./logger');
const pino = require('pino-http')({ logger: log });

const app = express();
app.use(pino);

const API = require('./api');

app.use('/api', API);

app.get('*/script.js', (req, res) => browserify(path.join(__dirname, './src/index.js'), { extensions: ['.jsx'] })
  .transform('babelify', { presets: ['env', 'react', 'stage-3'] })
  .bundle()
  .pipe(res));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.listen(4000, () => log.info('listening on 4000'));

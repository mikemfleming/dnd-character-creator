const express = require('express');
const browserify = require('browserify');
const path = require('path');

const app = express();

const API = require('./api');

app.use('/api', API);

app.get('*/script.js', (req, res) => browserify(path.join(__dirname, './src/index.js'))
  .transform('babelify', { presets: ['env', 'react', 'stage-3'] })
  .bundle()
  .pipe(res));

app.get('*.js', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.listen(4000, () => console.log('listening on 4000'));

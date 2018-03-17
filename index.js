const express = require('express');
const browserify = require('browserify');
const path = require('path');

const app = express();
const Api = require('./api');

require('./api')(app);

app.get('*/script.js', (req, res) => browserify(path.join(__dirname, './src/index.js'))
  .transform('babelify', { presets: ['env', 'react', 'stage-3'] })
  .bundle()
  .pipe(res));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.listen(4000, () => console.log('listening on 4000'));


const express = require('express')
const app = express()
const browserify = require('browserify')
const path = require('path')
const fs = require('fs')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')))

app.get('/script.js', (req, res) => {
	return browserify(path.join(__dirname, './src/index.js'))
		.transform('babelify', { presets: ['env', 'react'] })
		.bundle()
		.pipe(res)
})

app.listen(4000, () => console.log('listening on 4000'))

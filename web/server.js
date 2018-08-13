const express = require('express')
const path = require('path')
const app = express()

app.set('port', 8000)

// const config = require('../config.json')

app.use(express.static(path.join(__dirname, '../web')))

app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})
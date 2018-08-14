const express = require('express')
const path = require('path')
const app = express()
const db = require('../utils/dbFunctions.js')


app.set('port', 8000)

app.set('views', `${__dirname}/pages`)
app.set('view engine', 'ejs')

// Load the rest of the local files
app.use('/data', express.static(`${__dirname}/data`))
app.use('/dist', express.static(`${__dirname}/dist`))
app.use('/js', express.static(`${__dirname}/js`))
app.use('/less', express.static(`${__dirname}/less`))
app.use('/vendor', express.static(`${__dirname}/vendor`))

// TODO: Write a seperate file with an app.get for each route
app.get('/', (req, res) => {
  res.render('index.ejs', { testNumber: 1 })
})

const MembersController = require("./controllers/members");

app.get("/members/view/:id", MembersController.view);


app.get('/data', (req, res) => {
  res.render('tables.ejs', { testNumber: 1 })
})

app.get('/forms', (req, res) => {
  res.render('forms.ejs', { testNumber: 1 })
})

app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})
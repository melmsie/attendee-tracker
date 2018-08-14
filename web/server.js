const express = require('express')
const path = require('path')
const app = express()
const db = require('../utils/dbFunctions.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))


app.set('port', 8000)

app.set('views', `${__dirname}/pages`)
app.set('view engine', 'ejs')

// Load the rest of the local files
app.use('/data', express.static(`${__dirname}/data`))
app.use('/dist', express.static(`${__dirname}/dist`))
app.use('/js', express.static(`${__dirname}/js`))
app.use('/less', express.static(`${__dirname}/less`))
app.use('/vendor', express.static(`${__dirname}/vendor`))

const orgController = require("./controllers/orgs")
// const eventController = require("./controllers/events")
const memberController = require("./controllers/members")

// temporary for testing
const eventModel = require("./models/event.js")
app.get('/api/event/create', async (req, res) => {
  let random = Math.random().toString(36).substring(2,5)
  let event = {
    "name": `${random} event`,
    "description": "an example event description",
    "start": Date.now(),
    "location": "Chicago",
    "recurring": {},
    "members": [],
  }
  await eventModel.create('upholder', event)
  res.redirect('/')
})
app.post('/api/event/delete', async (req, res) => {
  console.log(req.body)
  await eventModel.delete('upholder', req.body.eventName)
  res.redirect('/')
})

app.get("/", orgController.view)


app.get('/data', (req, res) => {
  res.render('tables.ejs', { testNumber: 1 })
})

app.get('/forms', (req, res) => {
  res.render('forms.ejs', { testNumber: 1 })
})

app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})
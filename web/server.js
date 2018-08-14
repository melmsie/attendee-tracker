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
app.post('/api/event/create', async (req, res) => {
  let event = {
    "name": req.body.eventName,
    "description": req.body.eventDescription,
    "start": Date.now(), // date choosing functionality to come later
    "location": req.body.eventLocation, // Should verify locations later
    "recurring": {},
    "members": [],
  }
  await eventModel.create('upholder', event)
  res.redirect('/')
})
app.post('/api/event/delete', async (req, res) => {
  await eventModel.delete('upholder', req.body.eventName)
  res.redirect('/')
})
app.post('/api/event/checkin', async (req, res) => {
  let member = {
    "name": req.body.name,
    "age": req.body.age,
    "email": req.body.email,
    "gender": req.body.gender,
    "birthdate": req.body.birthday,
    "start": Date.now()
  }
  await eventModel.checkin('upholder', req.body.eventChoice, member)
  res.redirect('/')
})

app.get("/", orgController.viewMain)
app.get("/data", orgController.viewData)

app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})

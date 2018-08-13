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

app.get('/login', (req, res) => {
    res.render('login.ejs', { testNumber: 1 })
  })

  async function dbf() {
    await db.createOrg()
    let data = await db.getOrg('upholder')
    console.log(data)
  }
app.listen(app.get('port'), function () {
  dbf()
  console.log('The server is running on http://localhost:' + app.get('port'))
})
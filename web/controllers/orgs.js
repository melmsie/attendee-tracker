const orgModel = require("../models/orgs.js")

module.exports = {

  checkin (req, res, next) {
    
  }, 
  async view (req, res, next) {
    let org = await orgModel.fetch('upholder')
    res.render("index.ejs", {
      org: org
    })
  },
  listForEvent (req, res, next) {
    
  },
  remove (req, res, next) {

  }
}
const orgModel = require("../models/orgs.js")

module.exports = {

  async viewMain (req, res, next) {
    let org = await orgModel.fetch('upholder')
    res.render("index.ejs", {
      org: org
    })
  },
  async viewData (req, res, next) {
    let org = await orgModel.fetch('upholder')
    res.render("tables.ejs", {
      org: org
    })
  }
}
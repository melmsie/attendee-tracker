const Member = require("../models/member.js");

module.exports = {

  checkin (req, res, next) {
    
  }, 
  view (req, res, next) {
    

        res.render("viewname", {
            member: member
        })

  },
  listForEvent (req, res, next) {
    
  },
  remove (req, res, next) {

  }
}
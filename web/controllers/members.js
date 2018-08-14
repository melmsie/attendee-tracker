const Member = require("../models/member");

module.exports = {

  checkin (req, res, next) {
    
  }, 
  view (req, res, next) {
    Member.find(req.param("id")).exec((err, member) => {

        res.render("viewname", {
            member: member, 
            whatever: {
                extra: "yay"
            }
        })
    });
  },
  listForEvent (req, res, next) {
    
  },
  remove (req, res, next) {

  }
}
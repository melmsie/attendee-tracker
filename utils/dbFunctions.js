const r = require('rethinkdbdash')()

module.exports = {
  getOrg (name) {
    let org = r.table('orgs').filter(r.row('name').eq(name))
    if (!org) {
        this.createOrg()
    }
    return org || r.table('orgs').filter(r.row('name').eq(name))
  },
  createOrg () {
    return r.table('orgs').insert({
        "name": "upholder",
        "members": {
          "memberObject": {
            "memberName": "user",
            "gender": "string",
            "birthday": "date",
            "joinedAt": 1534187794,
            "social": {
              "facebook": "blah",
              "twitter": "blah",
              "phone": "5",
              "email": "blah" 
            }
          }
        },
        "events": {
          "eventOne": {
            "eventName": "example",
            "eventDescription": "a test event",
            "location": "Chicago",
            "startTime": 1534187794,
            "recurring": {},
             "attendingMembers": {
              "total": 1,
              "members": {}
            }
          }
        }
      }, {conflict: 'update'})
    .run()
  }
}
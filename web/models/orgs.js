const r = require('rethinkdbdash')()

module.exports = {
  delete () {

  },
  update () {

  },
  create (org) {
    return r.table('orgs').insert({
      "name": org.name,
      "members": [],
      "events": []
    }, {conflict: 'update'}).run()
  },
  fetch (name) {
    let org = r.table('orgs').filter(r.row('name').eq(name))
    return org // Need to handle undefined if the org doesn't exist
  }
}

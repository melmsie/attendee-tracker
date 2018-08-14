const r = require('rethinkdbdash')()
module.exports = {
  async delete (orgName, eventName) {
    let org = await r.table('orgs').filter(r.row('name').eq(orgName))
    let array = org[0].events.find(arr => arr.name === eventName)
    org[0].events.splice(org[0].events.indexOf(array), 1)
    return r.table('orgs').insert(org, {conflict: 'update'}).run()
  },
  async create (orgName, event) {
    let org = await r.table('orgs').filter(r.row('name').eq(orgName))
    org[0].events.push(event)
    return r.table('orgs').insert(org, {conflict: 'update'}).run()
  },
  update () {

  },
  list () {

  }
}



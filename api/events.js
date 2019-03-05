const request = require('../lib/request')

module.exports = {
  events
}

async function events(req, res) {
    try {
      res.send(await request('get', 'events'))
    }
    catch(e) {
      res.status(500).send(e)
    }
  }
var express = require('express')
var router = express.Router()

var messages = []

router.get('/', function (req, res) {
  res.json(messages)
})

router.post('/', function (req, res) {
  messages.unshift(req.body)
  res.status(200).end()
})

module.exports = router

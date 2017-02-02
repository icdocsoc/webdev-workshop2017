var express = require('express')
var router = express.Router()

var Message = require('../../models/message')

router.get('/', function (req, res, next) {
  Message.find({}).exec(function (err, messages) {
    if (err) {
      return next(err)
    }
    res.json(messages)
  })
})

router.post('/', function (req, res, next) {
  var msg = new Message(req.body)
  msg.save(function (err) {
    if (err) {
      next(err)
    }
    res.status(200).end()
  })
})

module.exports = router

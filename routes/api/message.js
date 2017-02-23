var express = require('express')
var router = express.Router()

var authenticate = require('./authenticate')

var Message = require('../../models/message')

router.get('/', authenticate, function (req, res, next) {
  Message.find({}).sort({date: 'desc'}).exec(function (err, messages) {
    if (err) {
      return next(err)
    }
    res.json(messages)
  })
})

router.post('/', authenticate, function (req, res, next) {
  var msg = new Message(req.body)
  msg.save(function (err) {
    if (err) {
      next(err)
      return
    }
    res.status(200).end()
  })
})

module.exports = router

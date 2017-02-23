var express = require('express')
var router = express.Router()

var User = require('../../models/user')

router.post('/register', function (req, res, next) {
  var user = new User(req.body)
  user.save(function (err) {
    if (err) {
      next(err)
      return
    }

    res.status(200).end()
  })
})

module.exports = router

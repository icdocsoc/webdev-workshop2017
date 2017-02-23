var express = require('express')
var router = express.Router()

var jwt = require('jsonwebtoken')

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

router.post('/login', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username: username}).exec(function (err, user) {
    if (err) {
      next(err)
      return
    }

    if (!user) {
      res.status(401).json({message: 'Wrong username or password'})
      return
    }

    if (!password) {
      res.status(401).json({message: 'Wrong username or password'})
      return
    }

    user.verifyPassword(password, function (err, valid) {
      if (err) {
        next(err)
        return
      }

      if (valid) {
        var payload = {username: username}
        var token = jwt.sign(payload, 'secretgoeshere')
        res.json({message: 'ok', token: token})
      } else {
        res.status(401).json({message: 'Wrong username or password'})
      }
    })
  })
})

module.exports = router

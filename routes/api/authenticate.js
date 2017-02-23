var passport = require('passport')
var passportJWT = require('passport-jwt')

var ExtractJwt = passportJWT.ExtractJwt
var JwtStrategy = passportJWT.Strategy

var User = require('../../models/user')

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader()
jwtOptions.secretOrKey = 'secretgoeshere'

var strategy = new JwtStrategy(jwtOptions, function (payload, next) {
  User.findOne({username: payload.username}).exec(function (err, user) {
    if (err) {
      next(err)
      return
    }

    if (user) {
      next(null, user)
    } else {
      next(null, false)
    }
  })
})

passport.use(strategy)

module.exports = passport.authenticate('jwt', { session: false })

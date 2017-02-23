var mongoose = require('mongoose')
var mongooseBcrypt = require('mongoose-bcrypt')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  username: String,
  password: { type: String, bcrypt: true }
})

UserSchema.plugin(mongooseBcrypt)

var User = mongoose.model('User', UserSchema)

module.exports = User
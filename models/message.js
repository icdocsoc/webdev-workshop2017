var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MessageSchema = new Schema({
  sender: String,
  text: String,
  date: Date
})

var Message = mongoose.model('Message', MessageSchema)

module.exports = Message

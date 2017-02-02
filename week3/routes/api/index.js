var express = require('express')
var router = express.Router()

router.use('/messages', require('./messages'))

module.exports = router

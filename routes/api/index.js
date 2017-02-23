var express = require('express')
var router = express.Router()

router.use('/message', require('./message'))

module.exports = router

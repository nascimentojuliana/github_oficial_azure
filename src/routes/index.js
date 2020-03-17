const express = require('express')
const router = express.Router()
const users = require('./users')
const logs = require('./logs')

router.get('/', (req, res) => {
  res.json({
    users: 'https://sentinellog.azurewebsites.net/v1/users',
    logs: 'https://sentinellog.azurewebsites.net/v1/logs',
  })
})

router.use('/users', users)
router.use('/logs', logs)

module.exports = router 

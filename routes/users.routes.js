const express = require('express')
const router = express.Router()
const UserService = require('../services/user.services')

const service = new UserService()

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const user = service.findOne(id)
  res.json(user)
})

router.post('/', (req, res) => {
  const body = req.body
  const user = service.create(body)
  res.status(201).json({
    message: "Created",
    user
  })
})

module.exports = router

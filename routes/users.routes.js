const express = require('express')
const router = express.Router()
const UserService = require('../services/user.services')

const service = new UserService()

router.get('/', async (req, res) => {
  const users = await service.find()
  res.json(users)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await service.findOne(id)
    res.json(user)
  } catch (error) {
    next(error)
  }

})

router.post('/', async (req, res) => {
  const body = req.body
  const user = await service.create(body)
  res.status(201).json({
    message: "Created",
    user
  })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const user = await service.update(id, body)
    res.json(user)
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
})

module.exports = router

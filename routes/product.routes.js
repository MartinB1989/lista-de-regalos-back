const express = require('express')
const { faker } = require('@faker-js/faker');
const router = express.Router()

router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 30
  for(let i = 0; i < limit; i++) {
    products.push({
      product: faker.commerce.product(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(100, 100000, 2, '$'),
      category: faker.commerce.department(),
      image: faker.image.technics()
    })
  }
  res.json(products)
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router

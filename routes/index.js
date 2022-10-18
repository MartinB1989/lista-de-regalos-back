const express = require('express')

const userRouter = require('./users.routes')
const productRouter = require('./product.routes')
const giftListRouter = require('./giftList.routes')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/user', userRouter)
  router.use('/product', productRouter)
  router.use('/gift-list', giftListRouter )
}

module.exports = routerApi

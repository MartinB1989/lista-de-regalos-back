const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler } = require('./middleware/error.handler')

const app = express()
const port = 3000

app.use(express.json())

routerApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Run on port: ', port)
})

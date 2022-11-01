const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express()
const port = 3000

app.use(express.json())
// const whiteList = ['http://localhost:5500']
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('no permitido'))
//     }
//   }
// }
// app.use(cors(options))
app.use(cors())

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Run on port: ', port)
})

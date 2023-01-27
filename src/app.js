const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

// Configure app to use bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable api to be access from another domain
app.use(cors())

const port = process.env.APP_PORT || 3000

app.use(morgan('dev'))

// Register api routes
const routes = require('./routes')

// connect all routes to our app
app.use('/', routes)

// Start the app server
if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

module.exports = app

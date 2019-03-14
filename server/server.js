const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv').config()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use('/patientProfiles', require('./routes/patientProfiles'))
app.use('/evaluation', require('./evaluation/evaluation'))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Server ready on port ' + port)
})

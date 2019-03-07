const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv').config()

// process.env.DB_CONNECT -- if live
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
})
app.use(cors())
app.use(express.json())

app.use('/patientProfiles', require('./routes/patientProfiles'))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Server ready on port ' + port)
})

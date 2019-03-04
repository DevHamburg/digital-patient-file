const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/learning', {
  useNewUrlParser: true,
})
app.use(cors())
app.use(express.json())

app.use('/patientProfiles', require('./routes/patientProfiles'))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Server ready on port ' + port)
})

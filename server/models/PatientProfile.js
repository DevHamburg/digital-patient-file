const mongoose = require('mongoose')

const PatientProfileSchema = new mongoose.Schema({
  image: {
    type: mongoose.SchemaTypes.String,
  },

  name: {
    type: mongoose.SchemaTypes.String,
  },
  surname: {
    type: mongoose.SchemaTypes.String,
  },
  age: {
    type: mongoose.SchemaTypes.Number,
    set: val => Number(val),
  },
  gender: {
    type: mongoose.SchemaTypes.String,
  },
  contact: {
    type: mongoose.SchemaTypes.Number,
    set: val => Number(val),
  },
  findings: {
    type: mongoose.SchemaTypes.String,
  },
  weight: {
    type: mongoose.SchemaTypes.Number,
    set: val => Number(val),
  },
  size: {
    type: mongoose.SchemaTypes.Number,
    set: val => Number(val),
  },
  bloodType: {
    type: mongoose.SchemaTypes.String,
  },
  bloodPressure: {
    type: mongoose.SchemaTypes.String,
  },
})

module.exports = mongoose.model('PatientProfile', PatientProfileSchema)

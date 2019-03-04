const mongoose = require('mongoose')

const PatientProfileSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    default: '- no name yet -',
  },
  surname: {
    type: mongoose.SchemaTypes.String,
    default: '- no surname yet -',
  },
  age: {
    type: mongoose.SchemaTypes.Number,
    default: '- no age yet -',
  },
  gender: {
    type: mongoose.SchemaTypes.String,
    default: '- no gender yet -',
  },
  contact: {
    type: mongoose.SchemaTypes.Number,
    default: '- no contact yet -',
  },
  findings: {
    type: mongoose.SchemaTypes.String,
    default: '- no findings yet -',
  },
  weight: {
    type: mongoose.SchemaTypes.Number,
    default: '- no weight yet -',
  },
  size: {
    type: mongoose.SchemaTypes.Number,
    default: '- no size yet -',
  },
  bloodType: {
    type: mongoose.SchemaTypes.String,
    default: '- no blood type yet -',
  },
  bloodPressure: {
    type: mongoose.SchemaTypes.String,
    default: '- no blood pressure yet -',
  },
})

module.exports = mongoose.model('PatientProfile', PatientProfileSchema)

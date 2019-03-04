const express = require('express')
const router = express.Router()
const PatientProfile = require('../models/PatientProfile')

router.get('/', (req, res) => {
  PatientProfile.find().then(patientProfiles => res.json(patientProfiles))
})

router.post('/', (req, res) => {
  PatientProfile.create(req.body)
    .then(patientProfile => res.json({ patientProfile }))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  PatientProfile.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  PatientProfile.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

module.exports = router

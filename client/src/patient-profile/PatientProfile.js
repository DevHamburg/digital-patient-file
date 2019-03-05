import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledPatientProfile = styled.section`
  padding: 18px 18px 0;
  position: relative;
`

PatientProfile.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  findings: PropTypes.string,
  weight: PropTypes.number,
  size: PropTypes.number,
  bloodType: PropTypes.string,
  bloodPressure: PropTypes.string,
}

export default function PatientProfile({
  name,
  surname,
  age,
  gender,
  contact,
  findings,
  weight,
  size,
  bloodType,
  bloodPressure,
}) {
  return (
    <div css="padding: 10px 0 0; scroll-snap-align: start;">
      <StyledPatientProfile>
        <h2>Name: {name}</h2>
        <h3>Nachname: {surname}</h3>
        <p>Alter: {age}</p>
        <p>Geschlecht: {gender}</p>
        <p>Kontaktnummer: {contact}</p>
        <p>Befunde: {findings}</p>
        <p>Gewicht: {weight}kg</p>
        <p>Groesse: {size}cm</p>
        <p>Blutgruppe: {bloodType}</p>
        <p>Blutdruck: {bloodPressure}</p>
      </StyledPatientProfile>
    </div>
  )
}

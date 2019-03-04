import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledPatientProfile = styled.section`
  padding: 18px 18px 0;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
`

PatientProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  contact: PropTypes.number,
  findings: PropTypes.string,
  weight: PropTypes.number,
  size: PropTypes.number,
  bloodType: PropTypes.string,
  bloodPressure: PropTypes.string,
}

PatientProfile.defaultProps = {
  name: 'No name defined',
  surname: 'No surname defined',
  age: 0,
  gender: 'No gender defined',
  contact: 0,
  findings: 'No findings',
  weight: 0,
  size: 0,
  bloodType: 'No blood type defined',
  bloodPressure: 'No blood pressure defined',
}

export default function PatientProfile({
  image,
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
        <div>{image}</div>
        <h2>Name: {name}</h2>
        <h3>Nachname: {surname}</h3>
        <p>Alter: {age}</p>
        <p>Geschlecht: {gender}</p>
        <p>Kontaktnummer: {contact}</p>
        <p>Befunde: {findings}</p>
        <p>Gewicht: {weight}</p>
        <p>Größe: {size}</p>
        <p>Blutgruppe: {bloodType}</p>
        <p>Blutdruck: {bloodPressure}</p>
      </StyledPatientProfile>
    </div>
  )
}

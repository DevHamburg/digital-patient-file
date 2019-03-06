import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import profile1 from '../images/profile-pictures/profile1.png'
import { FaWeight, FaRulerVertical, FaTint, FaStopwatch } from 'react-icons/fa'

const StyledPatientProfile = styled.section`
  position: relative;
  margin-bottom: 12px;
`
const Grid = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`
const Section = styled.div`
  background: white;
  padding: 8px;
  font-size: 24px;
`
const CardHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid lightgray;

  & img {
    display: grid;
    width: 200px;
    border-radius: 50%;
  }
`

PatientProfile.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  contact: PropTypes.number,
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
        <Grid>
          <Section>
            <CardHeader>
              <div>
                <img src={profile1} alt="" />
              </div>
              <div>
                <h2>{name}</h2>
                <h3>{surname}</h3>
              </div>
            </CardHeader>
            <p>Alter: {age}</p>
            <p>Geschlecht: {gender}</p>
            <p>Kontaktnummer: {contact}</p>
            <p>Befunde: {findings}</p>
          </Section>
          <Section>
            <p>
              Gewicht: <FaWeight />
              {weight} kg
            </p>
            <p>
              Groesse: <FaRulerVertical />
              {size} cm
            </p>
            <p>
              Blutgruppe: <FaTint /> {bloodType}
            </p>
            <p>
              Blutdruck: <FaStopwatch />
              {bloodPressure}
            </p>
          </Section>
        </Grid>
      </StyledPatientProfile>
    </div>
  )
}

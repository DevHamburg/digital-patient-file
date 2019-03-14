import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  FaWeight,
  FaRulerVertical,
  FaTint,
  FaStopwatch,
  FaSearch,
} from 'react-icons/fa'
import Title from '../common/Title'
import { FaWeight, FaRulerVertical, FaTint, FaStopwatch } from 'react-icons/fa'
import Bmi from '../bmi-calculator/Bmi'

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

const PageHeader = styled.div`
  display: flex;
  justify-self: end;
  height: 50px;
  border: none;
  border-bottom: 2px solid #5fbf00;
  font-size: 24px;
  padding-left: 10px;
`

PatientProfile.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.string,
  contact: PropTypes.string,
  gender: PropTypes.string,
  findings: PropTypes.string,
  weight: PropTypes.string,
  height: PropTypes.string,
  bloodType: PropTypes.string,
  bloodPressure: PropTypes.string,
  search: PropTypes.string,
}

export default function PatientProfile({
  name,
  surname,
  age,
  gender,
  contact,
  findings,
  weight,
  height,
  bloodType,
  bloodPressure,
  image,
}) {
  return (
    <React.Fragment>
      <Title css="position: absolute; top: 0; width: 100%;  color: #5fbf00; font-size: 34px;">
        Patienten Profil
        <PageHeader>
          <input
            type="search"
            placeholder="Patienten suche"
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              paddingBottom: '5px',
              fontSize: '24px',
              width: '200px',
            }}
          />
          <FaSearch
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              paddingBottom: '10px',
              fontSize: '34px',
            }}
          />
        </PageHeader>
      </Title>

      <StyledPatientProfile>
        <Grid>
          <Section>
            <CardHeader>
              <div>
                <img src={image} alt="" />
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
              {height} cm
            </p>
            <p>
              Blutgruppe: <FaTint /> {bloodType}
            </p>
            <p>
              Blutdruck: <FaStopwatch />
              {bloodPressure}
            </p>
          </Section>
          <Section>
            <Bmi weight={weight} height={height} gender={gender} />
          </Section>
        </Grid>
      </StyledPatientProfile>
    </React.Fragment>
  )
}

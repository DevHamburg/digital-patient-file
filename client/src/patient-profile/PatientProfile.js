import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  FaWeight,
  FaRulerVertical,
  FaTint,
  FaStopwatch,
  FaUser,
  FaPhone,
  FaTransgenderAlt,
  FaQuestion,
} from 'react-icons/fa'
import Bmi from '../bmi-calculator/Bmi'
import UserChart from '../charts/UserChart'

const StyledPatientProfile = styled.section`
  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 24px;
  margin-top: 24px;
  box-shadow: 0 0 10px #696969;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`
const Section = styled.div`
  background: white;
`

const StyledName = styled.h2`
  font-size: 28px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 4px;
`

const StyledProfileText = styled.p`
  font-size: 28px;
  color: #696969;
  padding-left: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
`

const HeaderGrid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 8px;
  border-bottom: 2px solid lightgray;

  & img {
    display: grid;
    justify-self: center;
    align-self: center;
    height: 200px;
    width: 200px;
    background: lightgray;
    border: 5px solid lightgray;
    border-radius: 50%;
    margin-bottom: 8px;
  }
`

const StatusText = styled.p`
  display: grid;
  justify-content: start;
  align-content: center;
  font-size: 26px;
  color: #696969;
  margin: 12px;
`

const StatusTextResult = styled.p`
  display: grid;
  justify-content: start;
  align-content: center;
  font-size: 32px;
  color: #333;
  margin-right: 24px;
`

const StatusTextResultGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto auto;
  padding-bottom: 16px;
  padding-top: 16px;
  border-bottom: 2px solid lightgray;
`

const StyledUnits = styled.p`
  display: grid;
  font-size: 18px;
  padding-top: 28px;
  padding-right: 16px;
`

const StyledDiagramGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
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
      <StyledPatientProfile>
        <Grid>
          <Section>
            <HeaderGrid>
              <img src={image} alt="" />
              <StyledName>
                {name} {surname}
              </StyledName>
            </HeaderGrid>
            <StyledProfileText>
              <FaUser style={{ fontSize: '24px', marginRight: '16px' }} />
              Alter: {age}
            </StyledProfileText>
            <StyledProfileText>
              <FaTransgenderAlt
                style={{ fontSize: '24px', marginRight: '16px' }}
              />
              Geschlecht: {gender}
            </StyledProfileText>
            <StyledProfileText>
              <FaPhone style={{ fontSize: '24px', marginRight: '16px' }} />
              Kontakt: +49{contact}
            </StyledProfileText>
            <StyledProfileText>
              <FaQuestion style={{ fontSize: '24px', marginRight: '16px' }} />
              Befund: {findings}
            </StyledProfileText>
          </Section>
          <Section>
            <StatusTextResultGrid>
              <FaWeight
                style={{
                  fontSize: '52px',
                  margin: '28px',
                  color: '#5fbf00',
                  // border: '1px solid #5fbf00',
                  borderRadius: '20px',
                }}
              />
              <StatusText>Körperewicht:</StatusText>
              <StatusTextResult>{weight}</StatusTextResult>
              <StyledUnits>kg</StyledUnits>
            </StatusTextResultGrid>

            <StatusTextResultGrid>
              <FaRulerVertical
                style={{
                  fontSize: '52px',
                  margin: '28px',
                  color: '#5fbf00',
                  borderRadius: '20px',
                }}
              />
              <StatusText>Körpergröße:</StatusText>
              <StatusTextResult>{height}</StatusTextResult>
              <StyledUnits>cm</StyledUnits>
            </StatusTextResultGrid>

            <StatusTextResultGrid>
              <FaTint
                style={{
                  fontSize: '52px',
                  margin: '28px',
                  color: '#5fbf00',

                  borderRadius: '20px',
                }}
              />
              <StatusText>Blutgruppe:</StatusText>
              <StatusTextResult>{bloodType}</StatusTextResult>
            </StatusTextResultGrid>
            <StatusTextResultGrid>
              <FaStopwatch
                style={{
                  fontSize: '52px',
                  margin: '28px',
                  color: '#5fbf00',

                  borderRadius: '20px',
                }}
              />
              <StatusText>Blutdruck:</StatusText>
              <StatusTextResult>{bloodPressure}</StatusTextResult>
              <StyledUnits>mmhg</StyledUnits>
            </StatusTextResultGrid>
          </Section>
          <Section>
            <StyledDiagramGrid>
              <Bmi weight={weight} height={height} gender={gender} />
              <UserChart />
            </StyledDiagramGrid>
          </Section>
        </Grid>
      </StyledPatientProfile>
    </React.Fragment>
  )
}

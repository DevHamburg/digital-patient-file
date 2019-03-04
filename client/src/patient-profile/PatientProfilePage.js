import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import PatientProfile from './PatientProfile'
import PatientProfileContainer from './PatientProfileContainer'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

export default function PatientProfilePage({ patientProfiles }) {
  return (
    <PageGrid>
      <Header />
      <PatientProfileContainer>
        {patientProfiles.map(patientProfile => (
          <PatientProfile key={patientProfile._id} />
        ))}
      </PatientProfileContainer>
    </PageGrid>
  )
}

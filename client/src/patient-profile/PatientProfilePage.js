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
      <input type="search" />
      <PatientProfileContainer>
        {patientProfiles.map((patientProfile, index) => (
          <PatientProfile
            {...patientProfile}
            key={patientProfile._id}
            patientProfile={patientProfile}
          />
        ))}
      </PatientProfileContainer>
    </PageGrid>
  )
}

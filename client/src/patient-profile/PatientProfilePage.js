import React, { useState } from 'react'
import styled from 'styled-components'
import PatientProfile from './PatientProfile'
import PatientProfileContainer from './PatientProfileContainer'
import Title from '../common/Title'
import Search from '../common/Search'
import { FaUserPlus } from 'react-icons/fa'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

const StyledTitleDiv = styled.div`
  border-bottom: 2px solid #5fbf00;
  padding: 10px;
`

export default function PatientProfilePage({ patientProfiles }) {
  const [searchInput, setSearchInput] = useState('')

  function onSearchInput(event) {
    setSearchInput(event.target.value)
    console.log(searchInput)
  }

  return (
    <PageGrid>
      <Title css="position: absolute; top: 0; width: 100%;  color: #696969; font-size: 32px;">
        <StyledTitleDiv>
          <FaUserPlus
            style={{
              fontSize: '24px',
              marginRight: '10px',
            }}
          />
          Patientenprofil
        </StyledTitleDiv>
      </Title>
      <Search onSearchInput={onSearchInput} />
      <PatientProfileContainer>
        {patientProfiles
          .filter(
            patientProfiles =>
              patientProfiles.name.toLowerCase() === searchInput
          )
          .map((patientProfile, index) => (
            <PatientProfile
              {...patientProfile}
              key={patientProfile._id}
              patientProfile={patientProfile}
              onSearchInput={onSearchInput}
            />
          ))}
      </PatientProfileContainer>
    </PageGrid>
  )
}

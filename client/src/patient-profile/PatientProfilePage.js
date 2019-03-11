import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import PatientProfile from './PatientProfile'
import PatientProfileContainer from './PatientProfileContainer'
import { FaSearch } from 'react-icons/fa'
import Title from '../common/Title'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
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

export default function PatientProfilePage({ patientProfiles }) {
  const [searchInput, setSearchInput] = useState('')

  function onSearchInput(event) {
    setSearchInput(event.target.value)
    console.log(searchInput)
  }

  return (
    <PageGrid>
      <Header />
      <Title css="position: absolute; top: 0; width: 100%;  color: #5fbf00; font-size: 34px;">
        Patienten Profil
        <PageHeader>
          <input
            onChange={onSearchInput}
            type="search"
            placeholder="Patienten suche"
            name="search"
            style={{
              border: 'none',
              display: 'flex',
              alignSelf: 'flex-end',
              paddingBottom: '5px',
              fontSize: '24px',
              width: '200px',
              outline: 'none',
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

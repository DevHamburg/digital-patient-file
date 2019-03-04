import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import PatientProfilePage from '../patient-profile/PatientProfilePage'
import CreatePatientProfile from '../create/CreatePatientProfile'
import {
  getAllPatientProfiles,
  getPatientProfilesFromStorage,
  postNewPatientProfile,
  savePatientProfilesToStorage,
} from '../services'
import SettingsPage from '../settings/SettingsPage'
import GlobalStyle from './GlobalStyle'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: white;
  text-decoration: none;

  &.active {
    background: hotpink;
  }
`

function App() {
  const [patientProfiles, setPatientProfiles] = useState(
    getPatientProfilesFromStorage()
  )

  useEffect(() => {
    getAllPatientProfiles().then(res => {
      setPatientProfiles(res.data)
    })
  }, [])

  useEffect(() => {
    savePatientProfilesToStorage(patientProfiles)
  }, [patientProfiles])

  function createPatientProfile(data) {
    postNewPatientProfile(data).then(res => {
      setPatientProfiles([...patientProfiles, res.data])
    })
  }

  return (
    <Router>
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <PatientProfilePage patientProfiles={patientProfiles} />
          )}
        />

        <Route
          path="/create-patient-profile"
          render={() => (
            <CreatePatientProfile onSubmit={createPatientProfile} />
          )}
        />
        <Route path="/settings" component={SettingsPage} />
        <Nav>
          <StyledLink exact to="/">
            Patienten Profil
          </StyledLink>
          <StyledLink to="/create-patient-profile">
            Patienten anlegen
          </StyledLink>
          <StyledLink to="/settings">Krebsanalyse</StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App

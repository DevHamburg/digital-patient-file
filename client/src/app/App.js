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
  togglePatientProfileBookmark,
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
  const [patientProfiles, setPatientProfile] = useState(
    getPatientProfilesFromStorage()
  )

  useEffect(() => {
    getAllPatientProfiles().then(res => {
      setPatientProfile(res.data)
    })
  }, [])

  useEffect(() => {
    savePatientProfilesToStorage(patientProfiles)
  }, [patientProfiles])

  function createPatientProfile(data) {
    postNewPatientProfile(data).then(res => {
      setPatientProfile([...patientProfiles, res.data])
    })
  }

  function toggleBookmark(patientProfile) {
    togglePatientProfileBookmark(patientProfile)
      .then(res => {
        const index = patientProfiles.indexOf(patientProfile)
        setPatientProfile([
          ...patientProfiles.slice(0, index),
          { ...res.data },
          ...patientProfiles.slice(index + 1),
        ])
      })
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <PatientProfilePage
              patientProfiles={patientProfiles}
              onBookmark={toggleBookmark}
            />
          )}
        />
        <Route
          path="/bookmarks"
          render={() => (
            <PatientProfilePage
              patientProfiles={patientProfiles.filter(
                patientProfile => patientProfile.bookmarked
              )}
              onBookmark={toggleBookmark}
            />
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
            Home
          </StyledLink>
          <StyledLink to="/bookmarks">Bookmarks</StyledLink>
          <StyledLink to="/create-patient-profile">Add Patient</StyledLink>
          <StyledLink to="/settings">Settings</StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App

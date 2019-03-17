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
import Evaluation from '../evaluation/Evaluation'
import GlobalStyle from './GlobalStyle'
import { FaRegAddressCard, FaUserPlus, FaChartPie } from 'react-icons/fa'
import logo from '../api/images/DevHamburgHealth.png'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 120px;
  background: lightgray;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  background: lightgray;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
`
const StyledImg = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background: white;
  padding: 12px;

  & img {
    height: 44px;
    width: 180px;
  }
`

const StyledLink = styled(NavLink)`
  display: grid;
  justify-items: center;
  align-items: center;
  background: white;
  color: #696969;
  text-decoration: none;
  font-size: 24px;
  text-transform: uppercase;
  padding: 12px;

  &.active {
    color: #5fbf00;
    border: 2px solid #5fbf00;
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
        <Route path="/evaluation" render={() => <Evaluation />} />
        <Nav>
          <StyledImg>
            <img src={logo} alt="logo" />
          </StyledImg>
          <StyledLink exact to="/">
            <FaRegAddressCard style={{ fontSize: '44px' }} />
            Patienten Profil
          </StyledLink>
          <StyledLink to="/create-patient-profile">
            <FaUserPlus style={{ fontSize: '44px' }} /> Patienten anlegen
          </StyledLink>
          <StyledLink to="/evaluation">
            <FaChartPie style={{ fontSize: '44px' }} />
            Krebsanalyse
          </StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App

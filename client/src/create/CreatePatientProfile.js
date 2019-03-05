import React, { useState } from 'react'
import styled from 'styled-components'
import PatientProfile from '../patient-profile/PatientProfile'
import PatientProfileContainer from '../patient-profile/PatientProfileContainer'
import Form from './Form'
import Title from '../common/Title'

const Grid = styled.section`
  display: grid;
  align-content: flex-end;
  padding: 12px;
`
const defaultData = {
  name: '',
  surname: '',
  age: 22,
  gender: '',
  contact: '',
  findings: '',
  weight: 80,
  size: 180,
  bloodType: '',
  bloodPressure: '',
}
export default function CreatePatientProfile(props) {
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    props.onSubmit(data)
    setData(defaultData)
  }

  const {
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
  } = data
  return (
    <Grid>
      <Title css="position: absolute; top: 0; width: 100%">Create</Title>
      <PatientProfileContainer data-cy="preview-container">
        {(name ||
          surname ||
          age ||
          gender ||
          contact ||
          findings ||
          weight ||
          size ||
          bloodType ||
          bloodPressure) && (
          <PatientProfile
            name={name || 'No name yet'}
            surname={surname || 'No surname yet'}
            age={age}
            gender={gender || 'No gender yet'}
            contact={contact}
            findings={findings || 'No findings yet'}
            weight={weight}
            size={size}
            bloodType={bloodType || 'No blood type yet'}
            bloodPressure={bloodPressure || 'No blood Pressure yet'}
          />
        )}
      </PatientProfileContainer>
      <Form data={data} onSubmit={onSubmit} onInputChange={onInputChange} />
    </Grid>
  )
}

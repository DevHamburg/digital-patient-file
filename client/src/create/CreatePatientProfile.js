import React, { useState } from 'react'
import styled from 'styled-components'
import PatientProfile from '../patient-profile/PatientProfile'
import PatientProfileContainer from '../patient-profile/PatientProfileContainer'
import Form from './Form'
import Title from '../common/Title'

const Grid = styled.section`
  display: grid;
  padding: 8px;
  align-content: flex-end;
`
const defaultData = {
  name: '',
  surname: '',
  age: undefined,
  gender: '',
  contact: undefined,
  findings: '',
  weight: undefined,
  size: undefined,
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
            name={name}
            surname={surname}
            age={age}
            gender={gender}
            contact={contact}
            findings={findings}
            weight={weight}
            size={size}
            bloodType={bloodType}
            bloodPressure={bloodPressure}
          />
        )}
      </PatientProfileContainer>
      <Form data={data} onSubmit={onSubmit} onInputChange={onInputChange} />
    </Grid>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import PatientProfile from '../patient-profile/PatientProfile'
import PatientProfileContainer from '../patient-profile/PatientProfileContainer'
import Form from './Form'
import Title from '../common/Title'
import axios from 'axios'
require('dotenv').config()

const Grid = styled.section`
  display: grid;
  padding: 8px;
  align-content: flex-end;
`
const defaultData = {
  image: '',
  name: '',
  surname: '',
  age: '',
  gender: '',
  contact: '',
  findings: '',
  weight: '',
  height: '',
  bloodType: '',
  bloodPressure: '',
}

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreatePatientProfile(props) {
  const [data, setData] = useState(defaultData)
  const [img, setImg] = useState('')

  function onImageUpload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImg(response.data.url)
  }

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    const dataCollection = { ...data, image: img }
    setData(dataCollection)
    props.onSubmit(dataCollection)
    setData(defaultData)
  }

  const {
    image,
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
  } = data
  return (
    <Grid>
      <PatientProfileContainer>
        {(image ||
          name ||
          surname ||
          age ||
          gender ||
          contact ||
          findings ||
          weight ||
          height ||
          bloodType ||
          bloodPressure) && (
          <PatientProfile
            image={img}
            name={name}
            surname={surname}
            age={age}
            gender={gender}
            contact={contact}
            findings={findings}
            weight={weight}
            height={height}
            bloodType={bloodType}
            bloodPressure={bloodPressure}
          />
        )}
        <Title css="position: absolute; top: 0; width: 100%;  color: #5fbf00; font-size: 34px;">
          Patienten anlegen
        </Title>
      </PatientProfileContainer>
      <Form
        data={data}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        onImageUpload={onImageUpload}
      />
    </Grid>
  )
}

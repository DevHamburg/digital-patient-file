import React, { useState } from 'react'
import styled from 'styled-components'
import PatientProfile from '../patient-profile/PatientProfile'
import PatientProfileContainer from '../patient-profile/PatientProfileContainer'
import Form from './Form'
import Title from '../common/Title'
import axios from 'axios'

const Grid = styled.section`
  display: grid;
  padding: 8px;
  align-content: flex-end;
`
const defaultData = {
  image: '',
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
  const [img, setImg] = useState('')

  function onImageUpload(event) {
    const url = `https://api.cloudinary.com/v1_1/dyhojswkc/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', 'cerhs0is')

    // imageUpload(url, formData)
    //   .then(onImageSave)
    //  .catch(err => console.error(err))

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
    setData({ ...data, image: img })
    props.onSubmit(data)
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
    size,
    bloodType,
    bloodPressure,
  } = data
  return (
    <Grid>
      <Title css="position: absolute; top: 0; width: 100%">Create</Title>
      <PatientProfileContainer data-cy="preview-container">
        {(image ||
          name ||
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
            image={img}
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
      <Form
        data={data}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        onImageUpload={onImageUpload}
      />
    </Grid>
  )
}

import React from 'react'
import styled from 'styled-components'
import 'filepond/dist/filepond.min.css'

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
`
const StyledInput = styled.input`
  background: white;
  width: 100%;
  border: none;
  border-bottom: 2px solid lightgray;
  border-radius: 0;
  height: 54px;
  padding-left: 8px;
  font-size: 24px;
`
const StyledButton = styled.button`
  background: white;
  color: #5fbf00;
  width: 100%;
  border: none;
  border: 4px solid #5fbf00;
  border-radius: 0;
  height: 54px;
  font-size: 24px;
`

export default function Form({ data, onSubmit, onImageUpload, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <StyledInput
          onChange={onInputChange}
          value={data.name}
          type="text"
          placeholder="Name"
          name="name"
        />
        <StyledInput
          onChange={onInputChange}
          value={data.surname}
          type="text"
          placeholder="Nachname"
          name="surname"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.age}
          type="text"
          placeholder="Alter"
          name="age"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.gender}
          type="text"
          placeholder="Geschlecht"
          name="gender"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.contact}
          type="text"
          placeholder="Kontaktnummer"
          name="contact"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.findings}
          type="text"
          placeholder="Befunde"
          name="findings"
        />
      </div>
      <div>
        <StyledInput
          onChange={onInputChange}
          value={data.weight}
          type="text"
          placeholder="Gewicht"
          name="weight"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.height}
          type="text"
          placeholder="Groesse"
          name="height"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.bloodType}
          type="text"
          placeholder="Blutgruppe"
          name="bloodType"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.bloodPressure}
          type="text"
          placeholder="Blutdruck"
          name="bloodPressure"
        />

        <StyledInput
          onChange={onImageUpload}
          value={data.image}
          type="file"
          placeholder="Image"
          name="image"
        />

        <StyledButton>Create</StyledButton>
      </div>
    </StyledForm>
  )
}

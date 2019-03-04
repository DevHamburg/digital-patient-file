import React from 'react'
import styled from 'styled-components'
import { FilePond } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`

export default function Form({ data, onSubmit, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <FilePond
        type="file"
        name="image"
        onChange={onInputChange}
        value={data.image}
        placeholder="Profil Bild"
      />
      <input
        onChange={onInputChange}
        value={data.name}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        onChange={onInputChange}
        value={data.surname}
        type="text"
        placeholder="Nachname"
        name="surname"
      />

      <input
        onChange={onInputChange}
        value={data.age}
        type="number"
        placeholder="Alter"
        name="age"
      />

      <input
        onChange={onInputChange}
        value={data.gender}
        type="text"
        placeholder="Geschlecht"
        name="gender"
      />

      <input
        onChange={onInputChange}
        value={data.contact}
        type="number"
        placeholder="Kontakt Nummer"
        name="contact"
      />

      <input
        onChange={onInputChange}
        value={data.findings}
        type="text"
        placeholder="Befunde"
        name="findings"
      />

      <input
        onChange={onInputChange}
        value={data.weight}
        type="number"
        placeholder="Gewicht"
        name="weight"
      />

      <input
        onChange={onInputChange}
        value={data.size}
        type="number"
        placeholder="Groesse"
        name="size"
      />

      <input
        onChange={onInputChange}
        value={data.bloodType}
        type="text"
        placeholder="Blutgruppe"
        name="bloodtype"
      />

      <input
        onChange={onInputChange}
        value={data.bloodPressure}
        type="text"
        placeholder="Blutdruck"
        name="bloodPressure"
      />

      <button>Create</button>
    </StyledForm>
  )
}

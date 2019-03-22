import React from 'react'
import styled from 'styled-components'
import { FaUpload } from 'react-icons/fa'

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`
const StyledInput = styled.input`
  outline: none;
  background: white;
  width: 100%;
  border: none;
  border-bottom: 2px solid lightgray;
  border-radius: 0;
  height: 54px;
  padding-left: 8px;
  font-size: 24px;

  &::placeholder {
    color: #696969;
  }
`

const StyledDivGender = styled.div`
  outline: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  border-bottom: 2px solid lightgray;
  border-radius: 4px;
  height: 54px;
  font-size: 24px;
`

const StyledDivFindings = styled.div`
  outline: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 100px;
  border-bottom: 2px solid lightgray;
  border-radius: 4px;
  height: 54px;
  font-size: 24px;
`
const StyledFormButton = styled.button`
  outline: none;
  text-align: left;
  background: white;
  color: #696969;
  border: 3px solid #5fbf00;
  border-radius: 8px;
  font-size: 24px;
  padding-right: 48px;

  &:active {
    background: #5fbf00;
    color: white;
  }
`
const StyledImageInput = styled.input`
  outline: none;
  visibility: hidden;
  opacity: 0;
  max-width: 0.1px;
  max-height: 0.1px;
`

const StyledLabel = styled.label`
  outline: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: white;
  color: #696969;
  height: 52px;
  width: 100%;
  font-size: 24px;
`

const StyledButton = styled.button`
  outline: none;
  background: #5fbf00;
  color: white;
  width: 100%;
  border: none;
  border: 4px solid #5fbf00;
  border-radius: 8px;
  height: 54px;
  font-size: 24px;
`

export default function Form({
  data,
  onSubmit,
  onImageUpload,
  onInputChange,
  onButtonClick,
}) {
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

        <StyledDivGender>
          <StyledFormButton
            onClick={onButtonClick}
            value="Männlich"
            type="text"
            placeholder="Geschlecht"
            name="gender"
          >
            Männlich
          </StyledFormButton>
          <StyledFormButton
            onClick={onButtonClick}
            value="Weiblich"
            type="text"
            placeholder="Geschlecht"
            name="gender"
          >
            Weiblich
          </StyledFormButton>
        </StyledDivGender>
      </div>
      <div>
        <StyledInput
          onChange={onInputChange}
          value={data.contact}
          type="text"
          placeholder="Kontaktnummer"
          name="contact"
        />

        <StyledDivFindings>
          <StyledFormButton
            onClick={onButtonClick}
            value="Positiv"
            type="text"
            placeholder="Befunde"
            name="findings"
          >
            Positiv
          </StyledFormButton>
          <StyledFormButton
            onClick={onButtonClick}
            value="Negativ"
            type="text"
            placeholder="Befunde"
            name="findings"
          >
            Negativ
          </StyledFormButton>
          <StyledInput
            onChange={onInputChange}
            value={data.percent}
            type="text"
            placeholder="00"
            name="percent"
          />
        </StyledDivFindings>
        <StyledInput
          onChange={onInputChange}
          value={data.weight}
          type="text"
          placeholder="Gewicht in kg"
          name="weight"
        />

        <StyledInput
          onChange={onInputChange}
          value={data.height}
          type="text"
          placeholder="Größe in cm"
          name="height"
        />
      </div>
      <div>
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
        <StyledLabel>
          <span>
            Datei auswählen
            <FaUpload />
          </span>
          <StyledImageInput
            onChange={onImageUpload}
            value={data.image}
            type="file"
            placeholder="Image"
            name="image"
            id="input"
          />
        </StyledLabel>
        <StyledButton>Speichern</StyledButton>
      </div>
    </StyledForm>
  )
}

import React from 'react'
import styled from 'styled-components'
import ReactSpeedometer from 'react-d3-speedometer'

const StyledBmi = styled.div`
  display: grid;
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  justify-content: center;
  align-content: center;
`
const StyledStatus = styled.p`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 28px;
  color: #333;
`

const StyledResult = styled.p`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 28px;
  color: #333;
`

export default function Bmi({ height, weight, gender }) {
  let bmi, health
  bmi = Math.round((weight / (height * height)) * 10000)
  if (gender === 'Mann') {
    if (bmi < 20) {
      health = 'Untergewicht'
    } else if (bmi < 25) {
      health = 'Normalgewicht'
    } else if (bmi < 30) {
      health = 'Übergewicht'
    } else if (bmi < 40) {
      health = 'Adipositas'
    } else if (bmi > 40) {
      health = 'massive Adipositas'
    }
  } else {
    if (bmi < 19) {
      health = 'Untergewicht'
    } else if (bmi < 24) {
      health = 'Normalgewicht'
    } else if (bmi < 30) {
      health = 'Übergewicht'
    } else if (bmi < 40) {
      health = 'Adipositas'
    } else if (bmi > 40) {
      health = 'massive Adipositas'
    }
  }

  return (
    <StyledBmi>
      <StyledStatus>{health}</StyledStatus>
      <ReactSpeedometer
        needleHeightRatio={0.9}
        minValue={15}
        maxValue={40}
        value={bmi}
        needleColor="white"
        startColor="#5fbf00"
        endColor="lightgray"
        segments={5}
        // textColor="lightgray"
        width={240}
        height={130}
      />
      <StyledResult>BMI: {bmi}</StyledResult>
    </StyledBmi>
  )
}

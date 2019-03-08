import React from 'react'
import styled from 'styled-components'
import ReactSpeedometer from 'react-d3-speedometer'

const StyledBmi = styled.div``

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
      <h3>HEALTH: {health}</h3>
      <ReactSpeedometer
        needleHeightRatio={0.9}
        minValue={15}
        maxValue={40}
        value={bmi}
        needleColor="white"
        startColor="#5fbf00"
        endColor="#5fbf00"
        segments={7}
        textColor="lightgray"
        width={300}
        height={160}
      />
      <h2>BMI: {bmi}</h2>
    </StyledBmi>
  )
}

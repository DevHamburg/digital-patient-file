import React, { Component } from 'react'
import Title from '../common/Title'
import axios from 'axios'
import styled from 'styled-components'
import { FaChartPie } from 'react-icons/fa'
const IP = process.env.REACT_APP_BACKEND_IP
const evaluationPath = `http://${IP}:4000/evaluation`

const StyledEvaluation = styled.section`
  display: grid;
  padding: 8px;
  align-content: center;
  justify-content: center;
`

const StyledResult = styled.div`
  font-size: 24px;
  color: #5fbf00;
`

const StyledHeading = styled.h2`
  font-size: 32px;
  color: black;
`
const StyledTitleDiv = styled.div`
  border-bottom: 2px solid #5fbf00;
  padding: 10px;
`

export default class Evaluation extends Component {
  constructor() {
    super()
    this.state = {
      description: '',
      selectedFile: '',
      result: null,
    }
  }

  onChange = e => {
    this.setState({ selectedFile: e.target.files[0] })
  }

  onSubmit = e => {
    e.preventDefault()
    const { selectedFile } = this.state
    let formData = new FormData()

    formData.append('description', selectedFile)

    axios.post(evaluationPath, formData).then(result => {
      console.log('Data submitted successfully')
      this.setState({ result })
    })
  }

  render() {
    return (
      <StyledEvaluation>
        <Title css="position: absolute; top: 0; width: 100%;  color: #696969; font-size: 32px;">
          <StyledTitleDiv>
            <FaChartPie
              style={{
                fontSize: '24px',
                marginRight: '10px',
              }}
            />
            Krebsanalyse
          </StyledTitleDiv>
        </Title>
        <div>
          <form onSubmit={this.onSubmit}>
            <input type="file" name="selectedFile" onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>

          <StyledHeading>Auswertung</StyledHeading>
          {this.state.result ? (
            <StyledResult>{this.state.result.data}</StyledResult>
          ) : null}
        </div>
      </StyledEvaluation>
    )
  }
}

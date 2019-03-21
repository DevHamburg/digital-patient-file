import React, { Component } from 'react'
import Title from '../common/Title'
import axios from 'axios'
import styled from 'styled-components'
import { FaChartPie, FaUpload } from 'react-icons/fa'
import { Chart } from 'react-google-charts'
import LoadingOverlay from 'react-loading-overlay'
import CircleLoader
from 'react-spinners/CircleLoader'
const IP = process.env.REACT_APP_BACKEND_IP
const evaluationPath = `http://${IP}:4000/evaluation`

const StyledEvaluation = styled.section`
  display: grid;
  padding: 8px;
  align-content: center;
  justify-content: center;
  background: white;
  width: 800px;
  margin: 0 auto;
  margin-top: 128px;
  margin-bottom: 24px;
  box-shadow: 0 0 10px #696969;
`
const Grid = styled.section`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-rows: auto;
`

const StyledHeading = styled.h2`
  font-size: 52px;
  color: #696969;
  margin: 44px;
  text-transform: uppercase;
`

const StyledTitleDiv = styled.div`
  border-bottom: 2px solid #5fbf00;
  padding: 10px;
`

const StyledInput = styled.input`
  visibility: hidden;
  opacity: 0;
  max-width: 0.1px;
  max-height: 0.1px;
`
const StyledButtonGrid = styled.div`
margin: 48px;
 display:grid
 grid-template-rows: 1fr;
 justify-content: center;
 align-content: center;
 grid-template-columns: auto auto;
`

const StyledLabel = styled.label`
  background: white;
  border: 2px solid #5fbf00;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 8px;
  width: 200px;
  height: 50px;
  font-size: 24px;
  color: #5fbf00;
`
const StyledButton = styled.button`
  background: #5fbf00;
  border: 2px solid white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 76px;
  height: 52px;
  font-size: 22px;
  color: white;
`

export default class Evaluation extends Component {
  state = {
    description: '',
    selectedFile: '',
    result: {procent: 50},
    isActive: false,
  }


  onSubmit = e => {
    e.preventDefault()
    const { selectedFile } = this.state
    let formData = new FormData()
    this.setState({

      isActive: true,
     })
    formData.append('description', selectedFile)

    axios.post(evaluationPath, formData).then(res => {
      console.log('Data submitted successfully')
      this.setState({
        result: res.data,
        isActive: false,
       })

      console.log(res.data)
    })
  }

  onChange = e => {
    e.preventDefault()

    let reader = new FileReader()
    let selectedFile = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        selectedFile: selectedFile,
        imagePreviewUrl: reader.result,
      })
    }
    console.log('selectedFile ' + selectedFile)
    console.log('reader ' + reader.result)
    reader.readAsDataURL(selectedFile)
  }

  render() {
    const pieOptions = {
      pieHole: 0.5,
      slices: [
        {
          color: '#5fbf00',
        },
        {
          color: 'lightgray',
        },
      ],
      legend: {
        position: 'bottom',
        alignment: 'center',
        textStyle: {
          color: '#333',
          fontSize: 24,
        },
      },
      tooltip: {
        showColorCode: true,
      },
      chartArea: {
        left: 0,
        top: 0,
        width: '100%',
        height: '60%',
      },
      fontName: 'Roboto, sans-serif',
    }

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
        <LoadingOverlay
  active={this.state.isActive}
  spinner={<CircleLoader
    color={'#5fbf00'}
  /> }
  >
        <Grid>
          <div>
            <StyledHeading>Auswertung</StyledHeading>
          </div>
          <Chart
            chartType="PieChart"
            data={[
              ['Age', 'Weight'],
              [
                'Wert',
                this.state.result ? this.state.result.procent : 100,
              ],
              [
                'Rest',
                this.state.result ? 100 - this.state.result.procent : 100,
              ],
            ]}
            options={pieOptions}
            graph_id="PieChart"
            width={'380px'}
            height={'280px'}
            legend_toggle
          />
          <h2>
  {this.state.result.procent}% {this.state.result.result}
          </h2>
          {/* {!$imagePreview && <StyledImage src={imagePreviewUrl} />} */}
          <form onSubmit={this.onSubmit}>
            <StyledButtonGrid>
              <StyledLabel htmlFor="input">
                <span>Datei auswählen</span>
                <StyledInput
                  id="input"
                  type="file"
                  name="selectedFile"
                  onChange={this.onChange}
                />
              </StyledLabel>
              <StyledButton type="submit">
                <FaUpload />
              </StyledButton>
            </StyledButtonGrid>
          </form>

        </Grid>
        </LoadingOverlay>
      </StyledEvaluation>

    )
  }
}

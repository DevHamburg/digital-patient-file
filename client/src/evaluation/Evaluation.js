import React, { Component } from 'react'
import Title from '../common/Title'
import axios from 'axios'
const IP = process.env.REACT_APP_BACKEND_IP
const evaluationPath = `http://${IP}:4000/evaluation`

export default class SettingsPage extends Component {
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
      <section>
        <Title css="position: absolute; top: 0; width: 100%;  color: #5fbf00; font-size: 34px;">
          Krebsanalyse
          <form onSubmit={this.onSubmit}>
            <input type="file" name="selectedFile" onChange={this.onChange} />
            <button type="submit">Submit</button>
            {this.state.result ? <div>{this.state.result.data}</div> : null}
          </form>
        </Title>
      </section>
    )
  }
}

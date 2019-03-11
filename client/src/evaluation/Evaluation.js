import React, { useState, useRef } from 'react'
import Title from '../common/Title'
import axios from 'axios'
const IP = process.env.REACT_APP_BACKEND_IP
const patientProfilesPath = `http://${IP}:4000/cancer-detection
`

export default function SettingsPage() {
  const [selectedFile, setSelectedFile] = useState(null)

  function fileSelectedHandler(event) {
    setSelectedFile({
      selectedFile: event.target.files[0],
    })
  }

  function fileUploadHandler() {
    const fd = new FormData()
    fd.append('image', selectedFile, selectedFile.name)
    axios
      .post(patientProfilesPath, fd, {
        onUploadPerogress: progressEvent => {
          console.log(
            'Upload Progress ' +
              Math.round(progressEvent.loaded / progressEvent.total) * 100 +
              '%'
          )
        },
      })
      .then(res => {
        console.log(res)
      })
  }

  return (
    <section>
      <Title css="position: absolute; top: 0; width: 100%;  color: #5fbf00; font-size: 34px;">
        KREBSANALYSE
      </Title>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </section>
  )
}

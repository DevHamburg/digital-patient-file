import axios from 'axios'
const IP = process.env.REACT_APP_BACKEND_IP
const patientProfilesPath = `http://${IP}:4000/patientProfiles`

export function getAllPatientProfiles() {
  return axios.get(patientProfilesPath)
}

export function imageUpload({ url, formData }) {
  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
}

export function postNewPatientProfile(patientProfile) {
  return axios.post(patientProfilesPath, patientProfile)
}

export function deletePatientProfile(patientProfile) {
  return axios.delete(`${patientProfilesPath}/${patientProfile._id}`)
}

export function getPatientProfilesFromStorage() {
  return getFromStorage('patientProfiles') || []
}

export function savePatientProfilesToStorage(patientProfiles) {
  saveToStorage('patientProfiles', patientProfiles)
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}

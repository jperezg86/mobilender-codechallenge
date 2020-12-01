import axios from 'axios'
const BASE_URL = "https://reqres.in/"
const BASE_URL2 = "http://localhost:3000/"
const LOGIN_ENDPOINT = "api/login"
const USER_INFO = "api/users/2"
const CREDITOS_GRUPALES_ENDPOINT = "creditos-grupales"
const CONTROL_CAMBIOS_ENDPOINT = "cambios"

const SOFTWARE_LISTS = "softwares"

export async function login(username, password)  {
   return (await axios.post(BASE_URL + LOGIN_ENDPOINT, { email: username, password })).data
}

export async function getUserInfo() {
   return (await axios.get(`${BASE_URL}${USER_INFO}`)).data.data
}

export async function getSoftwareFromAPI() {
   return (await axios.get(`${BASE_URL2}${SOFTWARE_LISTS}`)).data
}

export async function getCreditosGrupales() {
   return (await axios.get(`${BASE_URL2}${CREDITOS_GRUPALES_ENDPOINT}`)).data
}

export async function getControlCambios(idCredito) {
   return (await axios.get(`${BASE_URL2}${CONTROL_CAMBIOS_ENDPOINT}/${idCredito}`)).data
}

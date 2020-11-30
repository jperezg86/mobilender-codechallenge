import axios from 'axios'
const BASE_URL = "https://reqres.in/"

const LOGIN_ENDPOINT = "api/login"

export async function login(username, password)  {
   return (await axios.post(BASE_URL + LOGIN_ENDPOINT, { email: username, password })).data
}
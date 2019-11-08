import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// ============== Auth ================

export const loginUser = async (loginData) => {
  try {
    const resp = await api.Country('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.Country('/auth/register', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const verifyUser = async () => {
  const token = localStorage.authToken;
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

// ============== countries ===============

export const indexCountries = async () => {
  const resp = await api.get('/countries');
  debugger
  return resp.data
}

export const showCountry = async (id) => {
  const resp = await api.get(`/countries/${id}`);
  return resp.data
}

export const CountryCountry = async (CountryData) => {
  const resp = await api.Country('/countries', CountryData);
  return resp.data
}

export const putCountry = async (id, CountryData) => {
  const resp = await api.put(`/countries/${id}`, CountryData);
  return resp.data
}

export const destroyCountry = async (id) => {
  const resp = await api.delete(`/countries/${id}`);
  return resp.data
}
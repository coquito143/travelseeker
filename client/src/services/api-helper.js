import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// ============== Auth ================

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/users/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users/register', registerData);
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
    const resp = await api.get('/users/verify')
    return resp.data
  }
  return false
}

// ============== countries ===============

export const indexCountries = async () => {
  const resp = await api.get('/countries');

  return resp.data.countries
}

export const showCountry = async (id) => {
  const resp = await api.get(`/countries/${id}`);
  return resp.data
}

export const CountryCountry = async (CountryData) => {
  const resp = await api.post('/countries', CountryData);
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

export const addPhoto = async (photoData) => {
  // debugger
  const resp = await api.post(`/photos`, photoData);
  console.log(resp)
  return resp
}

// ============== photos ===============


export const showPhotos = async (countryId) => {
  const resp = await api.get(`/photos/${countryId}/country`);
  return resp.data.photos
}

export const allPhotos = async (photoData) => {
  const resp = await api.get(`/photos`);
  // await api.post(`/photos`, photoData);
  return resp.data.photos
}

export const getPhotos = async (id) => {
  const resp = await api.get(`/photos/users/${id}`);
  return resp.data.photos
}

export const updatePhoto = async (id, PhotoData) => {
  const resp = await api.put(`/photos/${id}`, PhotoData);
  // debugger;
  return resp.data.photo
}

export const deletePhoto = async (id) => {
  const resp = await api.delete(`/photos/users/${id}`);
  // debugger
  return resp.data

}

// ============== third party API ===============

export const currencyData = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=3c63a6c3332e19892d0d4b2361130a4b&format=1`);
  return resp.data.rates // return resp.data
}
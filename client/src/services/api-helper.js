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
  const resp = await api.post(`/photos`, photoData);
  return resp
}

// ============== photos ===============


export const showPhotos = async (countryId) => {
  const resp = await api.get(`/photos/${countryId}/country`);
  return resp.data.photos
}

export const allPhotos = async (photoData) => {
  const resp = await api.get(`/photos`);
  return resp.data.photos
}

export const getPhotos = async (id) => {
  const resp = await api.get(`/photos/users/${id}`);
  return resp.data.photos
}

export const updatePhoto = async (id, PhotoData) => {
  const resp = await api.put(`/photos/${id}`, PhotoData);
  return resp.data.photo
}

export const deletePhoto = async (id) => {
  const resp = await api.delete(`/photos/users/${id}`);
  return resp.data
}

// ============== third party API ===============

export const allRates = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  return resp.data.rates
}


export const dollarRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  return resp.data.rates.USD

}

export const nepalRate = async (cou) => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let nepal = resp.data.rates.NPR
  return nepal
}

export const mexicoRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let mexico = resp.data.rates.MXN
  return mexico
}

export const sriLankaRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let sriLanka = resp.data.rates.LKR
  return sriLanka
}

export const indonesiaRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let indonesia = resp.data.rates.IDR
  return indonesia
}

export const croatiaRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let croatia = resp.data.rates.HRK
  return croatia
}

export const peruRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let peru = resp.data.rates.PEN
  return peru
}

export const turkeyRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let turkey = resp.data.rates.TRY
  return turkey
}

export const costaRicaRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let costaRica = resp.data.rates.CRC
  return costaRica
}

export const moroccoRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let morocco = resp.data.rates.MAD
  return morocco
}

export const thailandRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let thailand = resp.data.rates.IDR
  return thailand
}

export const southAfricaRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let southAfrica = resp.data.rates.ZAR
  return southAfrica
}

export const czechRepublicRate = async () => {
  let resp = await axios.get(`http://data.fixer.io/api/latest?access_key=027bdb6a24ffc566e6dae37f4a5acb29&format=1`);
  let czechRepublic = resp.data.rates.CZK
  return czechRepublic
}
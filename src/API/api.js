import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function register(signupData) {
  const { data } = await instance.post('/users/signup', signupData);
  instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  return data;
}

export async function login(signupData) {
  const { data } = await instance.post('/users/login', signupData);
  instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  return data;
}

export async function fetchCurrent(token) {
  const data = await instance.get('/users/current');
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return data.data;
}

export async function logout() {
  const data = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return data;
}

export async function fetchContactsFromAPI() {
  const data = await instance.get('/contacts');
  console.log(data);
  return data.data;
}

export async function addContactToAPI(newContact) {
  const data = await instance.post('/contacts', newContact);
  return data.data;
}

export async function removeContactFromAPI(id) {
  await instance.delete(`/contacts/${id}`);
  return id;
}

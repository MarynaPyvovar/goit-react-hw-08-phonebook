import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function register() {
  const data = await instance.post('/users/singup');
  token.set(data.token);
  return data.data;
}

export async function login() {
  const data = await instance.post('/users/login');
  token.set(data.token);
  return data.data;
}

export async function logout() {
  const data = await instance.post('/users/logout');
  token.unset();
  return data.data;
}

export async function fetchContactsFromAPI() {
  const data = await instance.get('/contacts');

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

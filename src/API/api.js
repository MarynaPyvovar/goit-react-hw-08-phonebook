import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

// user

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
  try {
    setToken(token);
    const data = await instance.get('/users/current');
    return data.data;
  } catch (error) {
    setToken();
    throw error;
  }
}

export async function logout() {
  const data = await instance.post('/users/logout');
  return data.data;
}

// contacts

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

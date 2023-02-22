import axios from 'axios';

const BASE_URL = 'https://phonebook-api-a3ip.onrender.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

// user

export async function register(signupData) {
  const { data } = await instance.post('/auth/users/register', signupData);
  return data;
}

export async function verify(token) {
  const { data } = await instance.get(`/auth/users/verify/${token}`);
  return data;
}

export async function login(signupData) {
  const { data } = await instance.post('/auth/users/login', signupData);
  setToken.set(data.token);
  return data;
}

export async function fetchCurrent(token) {
  try {
    setCurrentToken(token);
    const data = await instance.get('/auth/users/current');
    return data.data;
  } catch (error) {
    setCurrentToken();
    throw error;
  }
}

export async function logout() {
  const data = await instance.post('/auth/users/logout');
  setToken.unset();
  return data.data;
}

// contacts

export async function fetchContactsFromAPI() {
  const { data } = await instance.get('/contacts');
  return data;
}

export async function addContactToAPI(newContact) {
  const { data } = await instance.post('/contacts', newContact);
  return data;
}

export async function removeContactFromAPI(id) {
  await instance.delete(`/contacts/${id}`);
  return id;
}

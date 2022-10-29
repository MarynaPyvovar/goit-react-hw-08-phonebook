import axios from 'axios';

const BASE_URL = 'https://63565caa9243cf412f82b480.mockapi.io/api/contacts';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchContactsFromAPI() {
  const data = await instance.get('/');
  return data.data;
}

export async function addContactToAPI(newContact) {
  const data = await instance.post('/', newContact);
  return data.data;
}

export async function removeContactFromAPI(id) {
  await instance.delete(`/${id}`);
  return id;
}

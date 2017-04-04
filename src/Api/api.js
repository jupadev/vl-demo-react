import * as requestHelper from '../utils/request';

const BASE = 'http://localhost:3000/'
const LOGIN_API = `${BASE}actors/login`;
const ACTOR_API = `${BASE}actors/`;
const COLLEGE_API = `${BASE}repository/`;
const V2_API = `${BASE}v2/`;

/**
* Description [given a login response it will be use to store on the session storage]
* @params { Object } response
*/
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.error(error);// eslint-disable-line no-console
  throw error;
}

/**
* Description [Login providing email and password]
* @params { String } login
* @params { String } password
* @return { Object }
*/
export const login = (login, password) => {
  return fetch(LOGIN_API,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({ login, password })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(requestHelper.setAuthtoken);
};

export const loadUser = (userId) => {
  return fetch(`${ACTOR_API}${userId}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "GET"
    })
    .then(checkStatus)
    .then(response => response.json());
};

export const getEntities = (entity, payload) => {
  return fetch(`${V2_API}entities/${entity}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "GET"
    })
    .then(checkStatus)
    .then(response => response.json());
};

export const getEntity = (entity, id) => {
  return fetch(`${V2_API}entities/${entity}/${id}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "GET"
    })
    .then(checkStatus)
    .then(response => response.json());
};

export const updateEntity = (entity, payload) => {
  return fetch(`${V2_API}entities/${entity}/${payload._id}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "PUT"
    })
    .then(checkStatus)
    .then(response => response.json());
};

export const removeEntity = (entity, payload) => {
  return fetch(`${V2_API}entities/${entity}/${payload._id}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "DELETE"
    })
    .then(checkStatus)
    .then(response => response.json());
};

export const insertEntity = (entity, payload) => {
  return fetch(`${V2_API}entities/${entity}`,
    {
      headers: requestHelper.getHeaders(),
      credentials: "same-origin",
      method: "POST"
    })
    .then(checkStatus)
    .then(response => response.json());
};


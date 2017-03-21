import Localcache from '../utils/localcache';
import { toISOString } from '../utils/helpers';
import { HmacSHA1 } from 'crypto-js';

const LOGIN_API = 'actors/login';


function getAuthHeaders() {
  const authtoken = Localcache.get('authtoken');
  const secret = Localcache.get('secret');

  const timeStamp = toISOString(new Date());
  const hash = HmacSHA1(timeStamp, secret).toString();

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-authtoken': authtoken,
    'x-signature': hash,
    'x-request-timestamp': timeStamp
  };
};


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
* Description [given a login response it will be use to store on the session storage]
* @params { Object } response
*/
function storeAuthtoken(response) {
  const { auth, actor: { '_id': userId } } = response;
  Localcache.set('authtoken', auth.authtoken);
  Localcache.set('secret', auth.secret);
  Localcache.set('userId', userId);
  Localcache.set('login', new Date());
  test();
  return response;
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
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({ login, password })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(storeAuthtoken);
};



export const test = (login, password) => {
  return fetch('v2/entities/jobs?&$filter=%7B%7D&$limit=10&$group=status&$inlinecount=true',
    {
      headers: getAuthHeaders(),
      credentials: "same-origin",
      method: "GET"
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(function(response) {
      console.log('Response->', response);
    });
};

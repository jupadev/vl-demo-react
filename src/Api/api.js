import Localcache from '../utils/localcache';
import {toISOString} from '../utils/helpers';
// const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
// const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
// const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const LOGIN_API = 'actors/login';



// Basic Authentication for accessing Shutterstock API
// const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
// const authParameters = {
//   headers: {
//     Authorization: basicAuth()
//   }
// };

const header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}


function getAuthHeaders() {
  const authtoken = Localcache.get('authtoken');
  const secret = Localcache.get('secret');

  const timeStamp = toISOString(new Date());
  const hash = ''//CryptoJS.HmacSHA1(timeStamp, secret).toString();

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-authtoken': authtoken,
    'x-signature': hash,
    'x-request-timestamp': timeStamp
  };
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function storeAuthtoken(response) {
  const { auth, actor: { '_id': userId } } = response;
  Localcache.set('authtoken', auth.authtoken);
  Localcache.set('secret', auth.secret);
  Localcache.set('userId', userId);
  Localcache.set('login', new Date());
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
  return fetch('v2/entities/jobs',
    {
      headers: getAuthHeaders(),
      credentials: "same-origin",
      method: "GET",
      body: JSON.stringify({})
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(storeAuthtoken);
};

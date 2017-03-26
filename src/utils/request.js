import Localcache from './localcache';
import { toISOString } from './helpers';
import { HmacSHA1 } from 'crypto-js';
import { isEmpty } from 'lodash';

export function getHeaders() {
  const authtoken = Localcache.get('authtoken') || null;
  const secret = Localcache.get('secret') || null;

  const timeStamp = authtoken ? toISOString(new Date()): null;
  const hash = timeStamp? HmacSHA1(timeStamp, secret).toString() : null;

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  if (hash) {
    headers = Object.assign(headers, {
      'x-authtoken': authtoken,
      'x-signature': hash,
      'x-request-timestamp': timeStamp}
      );
  }

  return headers;
};

/**
* Description [given a login response it will be use to store on the session storage]
* @params { Object } response
*/
export function setAuthtoken(response = {}) {
  const token = {authtoken: '', secret: ''}
  const auth = Object.assign(token, response.auth);
  const userId = isEmpty(response) ? '' : response.actor._id;
 
  Localcache.set('authtoken', auth.authtoken);
  Localcache.set('secret', auth.secret);
  Localcache.set('userId', userId);
  Localcache.set('login', userId ? new Date() : '');
  return response;
}



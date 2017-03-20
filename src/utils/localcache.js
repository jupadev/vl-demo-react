const cacheList = {};
const APP_PREFIX = 'viridis.cache.';

export default {
  get: (key) => {
    if (!sessionStorage) {
      return cacheList[key];
    }
    return sessionStorage.getItem(`${APP_PREFIX}${key}`);
  },
  set: (key, value) => {
    if (!sessionStorage) {
      cacheList[key] = value;
    } else {
      sessionStorage.setItem(`${APP_PREFIX}${key}`, value);
    }
  }
};

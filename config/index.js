var env = process.env.NODE_ENV;

var config = {
  "environments": {
    "development": "http://localhost:8001",
    "vagrant": "http://10.0.0.10:8001",
    "staging": "http://23.253.246.128:8001",
    "qa": "http://166.78.148.67:8001"
  }
};

function getEngineUrl() {
  return config.environments[env] || config.environments.staging;
}

// export default getEngineUrl;
module.exports = {
  getEngineUrl: getEngineUrl
};

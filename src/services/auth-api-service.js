import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  },
  postRegistration(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response =>
      !response.ok
        ? response.json().then(e => Promise.reject(e))
        : response.json()
    );
  }
};

export default AuthApiService;

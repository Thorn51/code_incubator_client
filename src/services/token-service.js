import config from "../config";

const TokenServices = {
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`);
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenServices.getAuthToken();
  }
};

export default TokenServices;

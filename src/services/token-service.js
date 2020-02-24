import config from "../config";
import jwtDecode from "jwt-decode";

const TokenServices = {
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`);
  },
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenServices.getAuthToken();
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  getUserDetails(token) {
    const loggedInUser = jwtDecode(token);
    return loggedInUser;
  }
};

export default TokenServices;

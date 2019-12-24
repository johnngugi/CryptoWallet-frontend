import Api from "./Api";

export default {
  login(credentials) {
    return Api().post("auth/login", credentials);
  },
  signup(details) {
    return Api().post("auth/register", details);
  }
};

import Api from "./Api";

export default {
  login(credentials) {
    return Api().post("api/auth/login", credentials);
  },
  signup(details) {
    return Api.post("api/auth/register", details);
  }
};

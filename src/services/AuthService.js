import Api from "./Api";

export default {
  login(credentials) {
    return Api().post("api/auth/login", credentials);
  }
};

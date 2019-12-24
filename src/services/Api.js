import axios from "axios";
import Cookies from 'js-cookie'

export default () => {
  const token = Cookies.get('user-token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'http://localhost:3000/api'
  });
};

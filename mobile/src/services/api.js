import axios from "axios";

const { BASE_URL } = process.env;

console.log(process.env, BASE_URL);

const api = axios.create({
  baseURL: BASE_URL
});

export default api;

import axios from "axios";

const baseURL = "https://api.github.com";

const api = axios.create({
  baseURL
});

export default api;

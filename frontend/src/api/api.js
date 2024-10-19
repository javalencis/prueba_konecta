import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.9:3000/api",
  headers: {
    "Content-Type": "appplication/json",
  },
});

export default api;

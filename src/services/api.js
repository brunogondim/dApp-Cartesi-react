import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:5003/advance",
});

export default api;
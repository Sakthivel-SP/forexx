import axios from "axios";

const api = axios.create({
  baseURL: "https://forexx-flame.vercel.app",
  withCredentials: true
});

export default api;

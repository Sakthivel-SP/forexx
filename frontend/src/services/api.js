import axios from "axios";

const api = axios.create({
  baseURL: "https://forexx-22183oplr-sakthivel-s-projects-ff0b17e9.vercel.app/api",
  withCredentials: true
});

export default api;

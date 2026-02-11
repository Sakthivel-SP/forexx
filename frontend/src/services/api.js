import axios from "axios";

const api = axios.create({
  baseURL: "https://forexx-flame.vercel.app",
 
});

export default api;

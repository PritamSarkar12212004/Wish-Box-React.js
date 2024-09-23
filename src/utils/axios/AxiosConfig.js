import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wish-box-backend.vercel.app",
});

export default axiosInstance;

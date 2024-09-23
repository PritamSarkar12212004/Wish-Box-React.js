import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wish-box-react-js.vercel.app",
});

export default axiosInstance;

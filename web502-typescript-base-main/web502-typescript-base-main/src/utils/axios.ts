import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // hoặc API của thầy
});

// Gắn Bearer Token tự động
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

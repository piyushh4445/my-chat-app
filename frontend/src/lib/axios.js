import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://my-chat-app-production-67b5.up.railway.app/api",
  withCredentials: true,
});
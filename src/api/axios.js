import axios from "axios";

const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  "Content-Type": "application/json",
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;

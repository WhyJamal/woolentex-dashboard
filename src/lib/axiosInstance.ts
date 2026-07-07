import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.ONEC_BASE_URL,
  auth: {
    username: process.env.ONEC_ADMIN_LOGIN!,
    password: process.env.ONEC_ADMIN_PASSWORD!,
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    console.error("1C so'rov xatosi:", err?.response?.status, err?.message);
    return Promise.reject(err);
  }
);

export const api = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config).then((res) => res.data),

  post: <T = unknown>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, body, config).then((res) => res.data),

  put: <T = unknown>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, body, config).then((res) => res.data),

  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config).then((res) => res.data),
};

export default axiosInstance;
// src/services/api/apiConnector.ts
import axios, { AxiosRequestConfig, Method } from "axios";
import { API_BASE_URL } from "./apiConstant";

export const apiConnector = async (
  method: Method,
  apiEndPoint: string,
  headers: Record<string, string> = {},
  data: Record<string, any> | FormData = {}
) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${API_BASE_URL}${apiEndPoint}`,
      headers: {
        ...headers,
      },
      data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    console.error("API Error:", error);
    throw error.response?.data || { message: "Unknown error occurred" };
  }
};

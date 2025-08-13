import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiEndpoint = {
  auth: {
    login: "/auth/login",
  },
};

export const apiMethod: any = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const getToken = async () => {
  return await AsyncStorage.getItem("token");
};

export const API_BASE_URL = "https://dummyjson.com";

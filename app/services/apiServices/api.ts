import { apiConnector } from './apiConnector';
import { getToken, apiMethod, apiEndpoint } from './apiConstant';

export const login = (payload: any) => {

//   const token = getToken();
// Authorization: `Bearer ${token}`,
//   const formData = new FormData();
//   formData.append('email', payload.email);
//   formData.append('password', payload.password);

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    "username": payload.username,
    "password": payload.password,
    "expiresInMins": 60
  }  

  return apiConnector(apiMethod.post, apiEndpoint.auth.login, headers, data);

};

export const api = {
  login,
};

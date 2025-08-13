export interface LoginPayload {
  username: string;
  password: string;
  expiresInMins?: number;
}

export const authType = {
    loginRequest:'LOGIN_REQUEST'
}

import { authType, LoginPayload } from "../types/auth.types";

const loginRequest = (payload: LoginPayload) => ({
  type: authType.loginRequest,
  payload,
});

export const authAction = {
  loginRequest,
};

import { authType, LoginPayload } from "../types/auth.types";

const loginRequest = (payload: any) => ({
  type: authType.loginRequest,
  payload,
});

export const authAction = {
  loginRequest,
};

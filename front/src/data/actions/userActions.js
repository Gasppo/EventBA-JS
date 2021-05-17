import { LOGIN_SUCCESS } from "./types";

export const loginUser = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

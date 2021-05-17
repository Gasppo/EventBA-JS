import { LOGIN_SUCCESS } from "../actions/types";
const users = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          email: payload.email,
          id: payload.id,
          username: payload.username,
        },
      };
    }
    default:
      return state;
  }
};

export default users;

import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import loginAPI from "./api/loginAPI";
import registerAPI from "./api/registerAPI";
import { loginUser } from "./data/actions/userActions";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  loginTemp: () => {},
  logout: () => {},
  register: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => {
          const userData = await loginAPI(email);
          if (userData) {
            const currUser = {
              ...userData,
            };
            console.log("logging");
            if (password === userData.password) {
              setUser(currUser);
              console.log(`Usuario conectado: ${currUser.username}`);
              dispatch(loginUser(currUser));
            } else {
              alert("Clave Incorrecta");
              return false;
            }
          } else {
            alert("Usuario no encontrado");
            return false;
          }
        },

        loginTemp: () => {
          const fakeUser = { username: "TempUser", email: "temp@mail", id: 0 };
          setUser(fakeUser);
          dispatch(loginUser(fakeUser));
        },

        logout: () => {
          setUser(null);
          dispatch(loginUser({}));
        },

        register: async (username, email, password) => {
          const newId = await registerAPI(username, email, password);
          if (newId) {
            setUser(username);
            dispatch(
              loginUser({ username: username, email: email, id: newId })
            );
          } else {
            return false;
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

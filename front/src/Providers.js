import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "./AuthProvider";
import store from "./data/store";
import { Routes } from "./Routes";

export const Providers = ({}) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </Provider>
  );
};

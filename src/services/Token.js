import { baseUrl } from "./Link";

export const setToken = (token) => {
  window.localStorage.setItem("Mixsel", token);
};

export const getToken = () => {
  return window.localStorage.getItem("Mixsel");
};

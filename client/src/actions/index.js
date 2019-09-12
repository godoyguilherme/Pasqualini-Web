import axios from "axios";
import store from "../store";
import { LOG_IN, LOG_OUT, COLLAPSE_SIDER } from "./types";
import history from "../history";

axios.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const googleLogin = userProfile => async dispatch => {
  const response = await axios.post("/api/auth/google", userProfile);
  dispatch({ type: LOG_IN, payload: response.data });

  let { from } = history.location;
  if (from) {
    return history.push(from);
  }
  history.push("/");
};

export const basicLogin = () => async dispatch => {
  const response = await axios.get("/api/auth/login");
  dispatch({ type: LOG_IN, payload: response.data });

  let { from } = history.location;
  if (from) {
    return history.push(from);
  }
  history.push("/");
};

export const logout = () => async dispatch => {
  dispatch({ type: LOG_OUT });
};

export const checkToken = () => async dispatch => {
  const response = await axios.get("/api/auth/checktoken");

  dispatch({ type: "dsdsad", payload: response.data });
};

export const collapseSiderChange = () => {
  return {
    type: COLLAPSE_SIDER
  };
};

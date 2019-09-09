import { LOG_IN, LOG_OUT } from "../actions/types";
const initialValue = { isLogged: false, token: null };

export default (state = initialValue, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return initialValue;
    default:
      return state;
  }
};

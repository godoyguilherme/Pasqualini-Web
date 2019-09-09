import { COLLAPSE_SIDER } from "../actions/types";

const initState = {
  collapsedSider: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDER:
      return { ...state, collapsedSider: !state.collapsedSider };
    default:
      return state;
  }
};

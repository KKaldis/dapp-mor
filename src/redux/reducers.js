import * as _actions from "./actions";

export const sideView = (state = undefined, action) => {
  switch (action.type) {
    case _actions.SIDEVIEW_CHANGED:
      return action.value;

    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  sideView: sideView(state.sideView, action),
});

export default reducer;

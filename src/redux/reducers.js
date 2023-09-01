import * as _actions from "./actions";

export const sideView = (state = undefined, action) => {
  switch (action.type) {
    case _actions.SIDEVIEW_CHANGED:
      return action.value;

    default:
      return state;
  }
};

export const isDecoding = (state = {isDecoding: true, decodingTime: 0}, action) => {
  switch (action.type) {

    case _actions.SET_IS_DECODING:
      return {...state, isDecoding: action.value};
      case _actions.SET_DECODING_TIME:
        return {...state, decodingTime: action.value};
  
    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  sideView: sideView(state.sideView, action),
  decoding : isDecoding(state.decoding, action),
});

export default reducer;

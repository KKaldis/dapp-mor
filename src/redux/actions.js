export const SIDEVIEW_CHANGED = "SIDEVIEW_CHANGED";
export const SET_IS_DECODING = "SET_IS_DECODING";
export const SET_DECODING_TIME = "SET_DECODING_TIME";

export const sideViewChanged = (value) => ({
  type: SIDEVIEW_CHANGED,
  value,
});

export const setIsDecoding = (value) => ({
  type: SET_IS_DECODING,
  value
});

export const setDecodingTime = (value) => ({
  type: SET_DECODING_TIME,
  value
});


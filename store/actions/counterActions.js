import * as types from "./actionTypes";

export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

export const incrementCount = () => ({ type: types.INCREMENT });

export const decrementCount = () => ({ type: types.DECREMENT });

export const resetCount = () => ({ type: types.RESET });

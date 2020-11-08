import * as actionTypes from "./actionTypes";

export const toggleTheme = (dark) => (dispatch) => {
  localStorage.setItem("dark", !dark);
  console.log("set dark to:", !dark);
  dispatch({ type: actionTypes.TOGGLE_THEME, dark: !dark });
};

export const setTheme = () => (dispatch) => {
  let dark = localStorage.getItem("dark");
  if (dark === null) {
    dark = false;
  } else {
    localStorage.getItem("dark") === "true" ? (dark = true) : (dark = false);
  }
  dispatch({ type: actionTypes.SET_THEME, dark: dark });
};

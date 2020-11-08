import * as actionTypes from "../actions/actionTypes";

// const foundSomething = () => {
// 	const dark = localStorage.getItem('dark');
// 	if (dark === null) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };

const initialState = {
  dark: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        dark: action.dark,
      };
    case actionTypes.SET_THEME:
      return {
        dark: action.dark,
      };
    default:
      return state;
  }
};

export default themeReducer;

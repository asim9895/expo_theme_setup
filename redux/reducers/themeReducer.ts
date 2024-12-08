// themeReducer.js
import { SET_THEME } from "../actions/themeAction";
import { light, dark, Colors } from "../../theme/colors";

interface InitialState {
  colors: Colors;
}

const initialState: InitialState = {
  colors: light, // Default to light theme
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
};

import { Colors } from "@/theme/colors";

// themeActions.js
export const SET_THEME = "SET_THEME";

export const setTheme = (colors: Colors) => ({
  type: SET_THEME,
  payload: colors,
});

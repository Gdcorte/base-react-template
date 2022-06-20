export const CHANGE_COLOR = "CHANGE_COLOR";

//Action Creator
export const changeColor = (color: string) => ({
   type: CHANGE_COLOR,
   color,
});

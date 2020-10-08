export const initialState = {
  user: null,
};

//Data layer initially looks like

export const actionTypes = {
  SET_USER: "SET_USER",
};

//some actions, imagine we have data layer we can dispatch actions into the data type. if you just receiev a action, return the new current but change the user.
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

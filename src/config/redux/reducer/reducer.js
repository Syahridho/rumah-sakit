const initialState = {
  isLogin: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "TES") {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  return state;
};

export default reducer;

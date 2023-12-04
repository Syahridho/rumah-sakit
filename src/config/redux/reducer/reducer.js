const initialState = {
  isLogin: false,
  isLoading: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  if (action.type === "TES") {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === "CHANGE_ISLOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }

  return state;
};

export default reducer;

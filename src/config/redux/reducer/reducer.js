const initialState = {
  isLoading: false,
  isLogin: false,
  isAdmin: false,
  user: {},
  medicene: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ISLOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "CHANGE_ISLOGIN":
      return {
        ...state,
        isLogin: action.value,
      };
    case "CHANGE_ISADMIN":
      return {
        ...state,
        isAdmin: action.value,
      };
    case "CHANGE_USER":
      return {
        ...state,
        user: action.value,
      };
    case "CHANGE_MEDICENE":
      return {
        ...state,
        medicene: action.value,
      };

    default:
      return state;
  }
};

export default reducer;

const token = localStorage.getItem("@KenzieShop:token") || "";

const defaultState = {
  token,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@user/SIGN_IN":
      const { token } = action;
      return { ...state, token };
    default:
      return state;
  }
};

export default userReducer;

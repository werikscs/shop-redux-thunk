const defaultState = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    case "@cart/REMOVE":
      const { newList } = action;
      return newList;

    default:
      return state;
  }
};

export default cartReducer;

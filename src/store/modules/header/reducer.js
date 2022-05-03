const headerReducer = (state = false, action) => {
  switch (action.type) {
    case "@cart/CHANGE_VISIBILITY":
      return !state;

    default:
      return state;
  }
};

export default headerReducer;

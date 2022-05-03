import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

  const isProductInCart = list.some(({ id }) => product.id === id);

  if (!isProductInCart) {
    const newList = [...list, product];

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));

    dispatch(addToCart(product));
  }
};

export const removeFromCartThunk = (productId) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

  const newList = list.filter((product) => product.id !== productId);

  localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));

  dispatch(removeFromCart(newList));
};

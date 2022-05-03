export const addToCart = (product) => ({ type: "@cart/ADD", product });

export const removeFromCart = (newList) => ({ type: "@cart/REMOVE", newList });

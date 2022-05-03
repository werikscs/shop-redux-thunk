import { useDispatch, useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

import * as S from "./styles";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const precoTotal = () => {
    return cart
      .reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
      .toFixed(2);
  };

  return cart.length ? (
    <S.Ul>
      {cart.map((product) => (
        <S.Li key={product.id}>
          <figure>
            <img src={product.image} alt="" />
          </figure>
          <h2>{product.title}</h2>
          <span>{product.priceFormatted}</span>
          <button onClick={() => dispatch(removeFromCartThunk(product.id))}>
            x
          </button>
        </S.Li>
      ))}
      <div>
        <h3>Total</h3>
        <span>R$ {precoTotal()}</span>
      </div>
    </S.Ul>
  ) : (
    <S.Ul>
      <h4>Carrinho vazio</h4>
    </S.Ul>
  );
};

export default Cart;

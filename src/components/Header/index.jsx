import { useDispatch, useSelector } from "react-redux";
import { changeCartVisibility } from "../../store/modules/header/actions";
import * as S from "./styles";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const cartVisibility = useSelector((state) => state.cartVisibility);

  const dispatch = useDispatch();

  return (
    <S.Header>
      <h1>Kenzie Shop</h1>
      <div>
        <span>{cart.length}</span>
        <button onClick={() => dispatch(changeCartVisibility(!cartVisibility))}>
          Carrinho
        </button>
      </div>
    </S.Header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";
import { addToCartThunk } from "../../store/modules/cart/thunks";

import Cart from "../Cart";

import formatValue from "../../utils/formatValue";

import * as S from "./styles";

const Home = () => {
  const dispatch = useDispatch();

  const cartVisibility = useSelector((state) => state.header);

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await api.get("/products/");

    const data = res.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <S.Section>
      <S.Ul>
        {products.map((product) => (
          <S.Li key={product.id}>
            <figure>
              <img src={product.image} alt="" />
            </figure>
            <h2>{product.title}</h2>
            <div>
              <span>{product.priceFormatted}</span>

              <button
                type="button"
                onClick={() => dispatch(addToCartThunk(product))}>
                Adicionar ao carrinho
              </button>
            </div>
          </S.Li>
        ))}
      </S.Ul>
      {cartVisibility && <Cart />}
    </S.Section>
  );
};

export default Home;

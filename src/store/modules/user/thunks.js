import api from "../../../services/api";

import { signIn } from "./actions";

export const signInThunk = (userData) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((res) => {
      localStorage.setItem("@KenzieShop:token", res.data.access);
      dispatch(signIn(res.data.access));
    })
    .catch((err) => console.log(err));
};

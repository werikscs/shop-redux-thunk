import { combineReducers } from "redux";
import cart from "./cart/reducer";
import header from "./header/reducer";

export default combineReducers({ cart, header });

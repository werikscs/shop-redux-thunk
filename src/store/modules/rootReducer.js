import { combineReducers } from "redux";
import cart from "./cart/reducer";
import user from "./user/reducer";
import headerReducer from "./header/reducer";

export default combineReducers({ cart, user, headerReducer });

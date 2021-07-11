import { combineReducers } from "redux";
import user from "./user";
import movies from "./movies";

const rootReducer = combineReducers({
  user,
  movies,
})

export default rootReducer;